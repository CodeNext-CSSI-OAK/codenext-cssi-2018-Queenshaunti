function makeSamwich() {
  console.log('this is my function')
}
makeSamwich();
let readline = require("readline-sync");

function doTheThing() {
  let theThing = readline.question("What do you want me to do?: ");
  if (theThing === "eat") {
    console.log("Computers can't eat!");
  } else {
    console.log("I'm sorry, I don't understand you!");
  }
}

doTheThing();
doTheThing();
doThething();
doThething();


function subtract(num1, num2) {
  console.log(num1 = 0 - num2 = 0);
}
let x = 6
let y = 4
let result = subtract(6,4);
console.log('the result is: ' + result);


function subtract(num1 = 0, num2 = 0) {
  return num1 - num2;
  let result = subtract(6,4);
  console.log('the result is: ' + result);
}

subtract(6, 2);

function absoluteDifference(num1, num2) {
if (num2 > num1){
  return num2 - num1;
}



  return num1 - num2
