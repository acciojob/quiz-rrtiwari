# Quiz App

### Create a quiz app which shows one question at a time. The webpage should include the following elements:

- Each question has 4 options. User should not be able to move to next question until he select an option and click on submit.
- When the user select a option and click on submit button then another question appers.
- There should be 4 question and after the user attempted all the 4 questions the result is shown and a button to reload the quiz appears.
- The outermost div for a question should have a class named `quiz-container` and id as `quiz`.
- The heading for the question should have an id as `question`. Each option should be input tag with radio type. For each options input has ids as `a`, `b`, `c`, `d`. And the text for each options should be under a label with ids as `a_text`, `b_text`, `c_text`, `d_text`.
- Submit button should have id as `submit`.

Data for the questions :
```
{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
    
 ```
A question page should look like this    

![image](https://user-images.githubusercontent.com/78348500/218151721-0e857b75-0f34-4c5a-b9b9-8dc9ef79ade8.png)

Response page should look like this:

![image](https://user-images.githubusercontent.com/78348500/218151949-dd00ee1e-a0c1-4876-8f61-8b4bde820b09.png)

