var timeElement = document.querySelector("time");
var questionElement = documnet.querySelector ("question")
var secondsLeft = 20

function setTime () {
    
    var timer = setInterval(function() { 
    secondsLeft--;
    timeElement.textContent = secondsLeft + " seconds left to answer question";

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      
      nextQuestion();
    }

  }, 2000);
};

addEventListener("click")



//questions 5 total, with multiple choice
//1. Which language would be best to use to specify the layout of a webpage?
// a. JavaScript
//b. HTML
//c. CSS (the answer)

//2. What symbol is used as the universal selector?
//a. $
//b. #
//c. *

//3. Which of the following is NOT a semantic element?
//a. header
//b. h1
//c. div

//4. What JavaScript data type has a value type of true or false?
//a. String
//b. BigInt
//c. Boolean

//5. What characters do you use to call/run/execute a function?
//a. {}
//b. &&
//c. ()