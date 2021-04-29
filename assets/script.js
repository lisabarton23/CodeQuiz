var timeElement = document.getElementById("time");
var questionElement = document.querySelector ("quiz");
var secondsLeft = 50;
var startQuiz = document.getElementById ("startButton");
var submitAnswer = document.getElementById ("submitButton");
var results = document.getElementById ("answer");
var timerInterval;
var clockRun=false;

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
    startTime()
    


  });

  function start(){
  
    
    document.getElementById("displayConent").style.display = "none";
    document.getElementById("highscoreContent").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    


    }

    
 
  
  
  // function setTimer () {
  //   var timerInterval = setInterval(function () {
  //     secondsLeft--;
  //     timeElement.textContent = secondsLeft + " seconds left!";
    
  //     if (secondsLeft === 0) {
  //        clearInterval (timerInterval);
  //        endGame ();
  //     //add final score info
  //     }
    
  //   }, 1000);
    
  
  //     }


      function startTime(){
       

        if (!clockRun) {
          timerInterval = setInterval(function () {
            //lose time do we have a fx for that
            countDown ();
           }, 1000); 
           clockRun=true;
          }


      }

      function stopTime(){


         clearInterval (timerInterval);
         clockRun=false;
         endGame ();
      //add final score info
    
    

      }

      function countDown(){
        console.log("counting down")
        console.log(secondsLeft)
    
        if (secondsLeft <1) {
         stopTime();
       }else{

       
          secondsLeft--;
          timeElement.textContent = secondsLeft + " seconds left!";
          console.log("reduce time")
       }


      }

      function loseTime(){
        //lose time
        secondsLeft-=10;
        //check if you can continute
        if (secondsLeft <1) {
         stopTime();
       }else{

       
       
          timeElement.textContent = secondsLeft + " seconds left!";
          console.log("reduce time")
       }



      }
  
  function displaycard(){

    document.getElementById("startContent").style.display = "none";
    document.getElementById("highscoreContent").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("displayConent").style.display = "block";
    //empty out the choice area b4 displaying a new btn
    document.getElementById("choiceArea").textContent="";

    //if we can go to the next index do the stuff below

    //if not we need to show the high score page
    //how do we know we are at the end.. check the quizQuestion.length
    if(index<quizQuestions.length){
      document.getElementById("question").textContent= (quizQuestions[index].question);


  
  
    for(var choiceoption=0;choiceoption < quizQuestions[index].choices.length;choiceoption++){
     var btn = document.createElement("button");
     btn.textContent=(quizQuestions[index].choices[choiceoption]);
     btn.setAttribute("id","userOption");
     btn.setAttribute("data-val",quizQuestions[index].choices[choiceoption]);
     btn.onclick=checkAns;
     document.querySelector("#choiceArea").appendChild(btn); 
    }
  }else{
    //go to the highscore page
    endGame ();
  }
    // // document.addEventListener ("click" , function (event) {if (event.target.matches (".answer")) {
   


    // // }
    


      

  }

  function checkAns(){
     // if   (quizQuestions[index].answer === btn) displaycard (quizQuestions [index++].question);
      // else (secondsLeft -- )
     // when user onclick choice evaluate if ans ==choice
    //right: next question displaycard()
    //wrong: take time off the timer, move to next question displaycard()
 
    //update the index
    index++;
    //call the next question
    displaycard () 

  }

   function endGame() {
    document.getElementById("displayConent").style.display = "none";

    document.getElementById("gameOver").style.display = "block";
    stopTime (); 
  }

  function highscore(){
    document.getElementById("displayConent").style.display = "none";

    document.getElementById("gameOver").style.display = "block";


  }

  //localstorage onsubmit btn to trigger localstorage




  start();
    
      // if   (quizQuestions[index].answer === btn) displaycard (quizQuestions [index++].question);
        
     
    

     
    


    
  //TODO: highScore.textcontent " secondsLeft"
  
  
//C. TODO: add local storage for high score and user to input initals
// TODO:  localStorage.setItem ("initals")

// console.log (quizQuestions[index].answer)

  
//3. TODO: when user onclick choice evaluate if ans ==choice
  //right: next question displaycard()
  //wrong: take time off the timer, move to next question displaycard()




  
//function needs to go through each questions one at a ti
// with only correct answers advancing to the next questions,
//also the timer needs to be counting down with more extra 5 
//seconds taken off if choice != answer



