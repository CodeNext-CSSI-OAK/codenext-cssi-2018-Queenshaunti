let readline = require("readline-sync");
let ourNum = 5;
let userNum = Number(readline.question("Please guess a number from 1 to 10: "));

if (userNum === ourNum) {
  console.log("You guessed it! Lucky!");
}else{ ()
  console.log('You are a genious');
} else if {(userNum > ourNum)
console.log ("You failed at life by reaching too high")
}else{(userNum < ourNum)
console.log("You failed by not reaching high enough")}
