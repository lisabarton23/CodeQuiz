var timeElement = document.getElementById("time");
var questionElement = document.querySelector ("quiz");
var secondsLeft = 50;
var startQuiz = document.getElementById ("startButton");
var submitAnswer = document.getElementById ("submitButton");
var results = document.getElementById ("answer");


var index=0;

  var quizQuestions = 
  [ 
    {
      //questions 5 total, with multiple choice boxes all correct answers are c 
      question : "1. Which language would be best to use to specify the layout of a webpage?",
      choices : ["JavaScript", "HTML", "CSS"],
      answer: "CSS"
    },
    {
      
      question : "2. Which symbol is known as the universal selector?",
      choices : ["!", "%", "*"],
      answer: "*"
    },
    {
      
      question : "What data type would '589' be in javascript?",
      choices : ["number", "boolean", "string"],
      answer: "string"
    },

    {
      
      question : "Which of the following is NOT a semantic element?",
      choices : ["<header>", "<p>", "<div>"],
      answer: "<div>"
    },
    {
      
      question : "To call/execute/run run a function what characters must follow the function?",
      choices : [";", "{}", "()"],
      answer: "()"
    },
  ];
  startQuiz.addEventListener ("click",function () {
    event.preventDefault;
    displaycard ();
    setTimer ()
    


  });
//display what needs to go when we start the game
//display a startbtn
//display instructions 
//display  a title
  function start(){
  
    
    document.getElementById("displayConent").style.display = "none";
    document.getElementById("highscoreContent").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    


    }

    //startQuiz.addEventListener ("click");
 
  //https://www.w3schools.com/jsref/prop_style_display.asp
  
//1. create your array of obj
//2. create a displaycard() fx ..
  //display the quest, choice
  function setTimer () {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeElement.textContent = secondsLeft + " seconds left!";
    
      if (secondsLeft === 0) {
         clearInterval (timerInterval);
      //add final score info
      }
    
    }, 1000);
    
  
      }
  
  function displaycard(){

    document.getElementById("startContent").style.display = "none";
    document.getElementById("highscoreContent").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("displayConent").style.display = "block";
    document.getElementById("question").textContent= (quizQuestions[index].question);
  
    for(var choiceoption=0;choiceoption < quizQuestions[index].choices.length;choiceoption++){
     var btn = document.createElement("button");
     btn.textContent=(quizQuestions[index].choices[choiceoption]);
     btn.setAttribute("id","userOption");
     btn.setAttribute("data-val",quizQuestions[index].choices[choiceoption]);
     document.querySelector("#choiceArea").appendChild(btn); 
     
     
        
     
      

     }
    // if  {(quizQuestions[index].answer === btn) displaycard (quizQuestions [index++].question);}
     


    }
  
  
    //A. trivia game 
//B.  add time
//C. TODO: add local storage for high score and user to input initals

    //display ans
// console.log (quizQuestions[index].answer)

  
//3. TODO: when user onclick choice evaluate if ans ==choice
  //right: next question displaycard()
  //wrong: take time off the timer, move to next question displaycard()




  //when the user onclick the startbtn then we call the displaycard() to play the game
  // startQuiz.addEventListener ("click", displaycard);

//function needs to go through each questions one at a ti
// with only correct answers advancing to the next questions,
//also the timer needs to be counting down with more extra 5 
//seconds taken off if question is answered wrong

// function quizGo () { 
    
//     // alert ("hello");
    
//     var timer = setInterval(function() { 
//     secondsLeft--;
//     //  timeElement.textContent = secondsLeft + quizQuestions;??

//       if(secondsLeft === 0) {
      
//         clearInterval(timerInterval);
//       //create a results box and highscore initals box, option to restart
//        ;
//      };

//    }, 2000);
// }

// startQuiz.addEventListener ("click", (quizGo)); 


//then sart button needs to disapper until quiz is finished//



start();