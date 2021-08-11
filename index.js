var readlineSync = require("readline-sync");
var score = 0;

//Questions and answers array.
var questionsList = [
  questionOne = {
    question: "Where do I was born? ",
    answer: "Asunción Mita"
  },
  questionTwo = {
    question: "What is my hair color? ",
    answer: "Black"
  },
  questionThree = {
    question: "Am I taller than 1.70m? ",
    answer: "Yes"
  },
  questionFour = {
    question: "What's my favorite subject? ",
    answer: "Math"
  },
  questionFive = {
    question: "What's my favorite sport? ",
    answer: "Soccer"
  }
]

//High scores array.
var recordsList = [
  scoreOne = {
    name: "Yeni",
    score: 4
  },
  scoreTwo = {
    name: "Ever",
    score: 3
  },
]

//Function to ask questions and evaluate answers.
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!");
    score += 1;
  } else {
    console.log("Wrong!");
  }
  console.log("Score: " + score);
  console.log("-----------------");
}

//Welcome to my game function. 
function welcome(){
  var userName = readlineSync.question("Hello, please tell me your name: ");
  console.log("Welcome, " + userName + ". This is the 'Do you know Antonio?' game." 
          + "\nLet's play!");
  console.log("***************************************************************");
}

//Function to play the game.
function game(){
  for (var i = 0; i < questionsList.length; i++){
    var currentQuestion = questionsList[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

//Function to show user score and high scores table.
function showScores(){
  console.log("Your SCORE is: " + score);
  console.log("Check out the high scores list.");
  console.log("Tell me if you have beaten any of them to update the table.")

  for(var i = 0; i < recordsList.length; i++){
    var currentRecord = recordsList[i];
    console.log(currentRecord.name + ": " + currentRecord.score);
  }
}

welcome();
game();
showScores();