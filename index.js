var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var quizList = [
  {question: "What's my surname?", answer: "kulmitra"},
  {question: "What's my age?", answer: 20},
  {question: "What's my hobby? (coding/singing/drawing)",answer: "coding"}
];

var highScorer = [
  {name: "Abhinav",
  score: 3},
  {name: "Vivek", 
  score: 2}
];

var userName = readlineSync.question("What's your name?");

console.log("Welcome " + userName+ " to DO YOU KNOW abhinav.");


function QnA(question, answer) {
  console.log(" ");
  var userAnswer = readlineSync.question(question);
  
  console.log("You typed " + userAnswer ); 

  if(userAnswer == answer){
  console.log("You are right !");
  score++;
  }
  else {
  console.log("Your answer is wrong :(");
  }
  console.log("Your score: " + score);
}

for(i=0; i<quizList.length; i++){
  QnA(quizList[i].question, quizList[i].answer);
}


console.log("Thanks for answering ! Your score is " + score + "/" + quizList.length);


console.log(" ");
console.log(chalk.magenta("Checkout the highest scorers :") );
console.log(chalk.blueBright(highScorer[0].name + ' ' + highScorer[0].score) );
console.log(chalk.yellowBright(highScorer[1].name + ' ' + highScorer[1].score) );