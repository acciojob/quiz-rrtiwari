let allQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

let cardContainer = document.getElementById("card-container");
let scoreDisplay = document.getElementById("score");

async function dataload() {
  try {
    let data = await fetch("./data.json");
    let res = await data.json();
    allQuestions = res;
    loadQuestion();
  } catch (err) {
    console.log("Error loading data:", err);
    cardContainer.innerHTML =
      "<p>Error loading quiz. Please try again later.</p>";
  }
}

function loadQuestion() {
  cardContainer.innerHTML = "";

  let obj = allQuestions[currentQuestionIndex];

  let h2 = document.createElement("h2");
  h2.innerHTML = obj.question;
  h2.id = "question";
  cardContainer.appendChild(h2);

  let ul = document.createElement("ul");
  ul.className = "options";

  const options = ["a", "b", "c", "d"];
  options.forEach((key) => {
    if (obj[key]) {
      let li = document.createElement("li");
      li.innerHTML = `<strong>${key.toUpperCase()})</strong> ${obj[key]}`;
      li.dataset.key = key;
      li.id = key; 

      li.addEventListener("click", () => {
        if (ul.classList.contains("answered")) return;

        let currentSelected = ul.querySelector(".selected");
        if (currentSelected) {
          currentSelected.classList.remove("selected");
        }
        li.classList.add("selected");
      });

      ul.appendChild(li);
    }
  });
  cardContainer.appendChild(ul);

  let submitBtn = document.createElement("button");
  submitBtn.id = "submit"; // <-- FIX 2: Change ID to "submit"
  submitBtn.innerHTML = "Submit";
  submitBtn.addEventListener("click", () => handleSubmit(obj, ul, submitBtn));
  cardContainer.appendChild(submitBtn);
}

function handleSubmit(obj, ul, submitBtn) {
  const selectedOption = ul.querySelector("li.selected");

  if (!selectedOption) {
    return;
  }

  ul.classList.add("answered");

  const selectedKey = selectedOption.dataset.key;
  const correctKey = obj.correct;

  const correctLi = ul.querySelector(`li[data-key="${correctKey}"]`);

  if (selectedKey === correctKey) {
    selectedOption.classList.add("correct");
    score++;
    updateScoreDisplay();
  } else {
    selectedOption.classList.add("incorrect");
    correctLi.classList.add("correct");
  }

  if (currentQuestionIndex === allQuestions.length - 1) {
    submitBtn.innerHTML = "Finish";
    submitBtn.onclick = showFinalScreen;
  } else {
    submitBtn.innerHTML = "Next";
    submitBtn.onclick = () => {
      currentQuestionIndex++;
      loadQuestion();
    };
  }
}

function updateScoreDisplay() {
  scoreDisplay.innerHTML = score;
}

function showFinalScreen() {
  cardContainer.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>You scored ${score} out of ${allQuestions.length}.</p>
        <button id="restart-btn" onclick="restartQuiz()">Restart Quiz</button> 
    `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  updateScoreDisplay();
  loadQuestion();
}

dataload();
