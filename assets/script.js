var timeElement = document.querySelector("time");
var questionElement = document.querySelector ("question");
var secondsLeft = 20;
var startQuiz = document.getElementById ("startButton");
var submitAnswer = document.getElementById ("submitButton");


//function needs to go through each questions one at a time
// with only correct answers advancing to the next questions,
//also the timer needs to be counting down with more extra 5 
//seconds taken off if question is answered wrong

function startQuiz () { 
    
    // alert ("hello");
    
    var timer = setInterval(function() { 
    secondsLeft--;
     timeElement.textContent = secondsLeft + quest1

      if(secondsLeft === 0) {
      
        clearInterval(timerInterval);
      
       nextQuestion();
     };

   }, 2000);


buttonFunction.addEventListener ("click", (startQuiz)); }
//then start button needs to disapper until quiz is finished//


var quizQuestions = [ {
//questions 5 total, with multiple choice boxes all correct answers are c 
 question : "1. Which language would be best to use to specify the layout of a webpage?",
 answers : {
  a: "JavaScript",
 b: "HTML",
 c: "CSS"},
 correctAnswer: "c"},


{ question:  "What symbol is used as the universal selector?", 
    answers : {
        a: "$",
b: "#",
c: "*"}, 
correctAnswer : "c"},

 { question : "Which of the following is NOT a semantic element?",
 answers : { 
a:" header",
b: "h1",
c: "div", },
correctAnswer : "c"},

{ question: "What JavaScript data type has a value type of true or false?", 
answers: {
a: "String",
b: "BigInt",
c: "Boolean",},
correctAnswer : "c"},


{question : " What characters do you use to call/run/execute a function?",
answers: {

a: "{}",
b: "&&",
c: "()", },
correctAnswer : "c"},
]
