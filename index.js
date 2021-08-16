var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + ", How much do you know Yash?");
  
  
  
  
var questions = [{
  question: "Where do I live? ",
  answer: "Yash"
},
{
  question: "My favorite movie? ",
  answer: "Inglorious Bastards"
},
{
  question: "Do you have any sibling? ",
  answer: "Yes"
},
{
  question: "My dream country to visit?",
  answer : "New Zeland"
},
{
  question:"Best superhero ever?",
  answer: "Mother"

}
];




function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!");
    score = score + 1;
  }
  else {
    console.log("Oops, Wrong!");
  }
  console.log( userName + ", your current score is: ", score);
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log( userName + " your final score is : ", score);
}

game();
showScores();
