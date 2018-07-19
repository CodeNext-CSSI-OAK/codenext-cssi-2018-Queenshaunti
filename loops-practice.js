let readline = require("readline-sync");


let correctPassword = "shittles";
let input = "";
let x = 0;
while (input !== correctPassword && (x < 3) ){
  input = readline.question ("Please enter the correct password: ");
  x++;
}
if (x === 3){
  console.log("U suck")
}else{
  console.log("Correct");
}

//let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZh"




// for(let count =s 0; count <= 30; count++ ){
//     console.log(count);
// }

// let correctPassword = "Yeller"
// for (let input = "";correctPassword !== input;){
//   input = readline.question('Enter correct password');
// }




// function containsSpace(str){
//     for(let i = 0; i < str.length; i++){
//       if (str.charAt(i) === " "){
//         return true
//       }
//     }
//     return false;
// }
// console.log(containsSpace("star wars"));
// console.log(containsSpace("starwars"));
// console.log(containsSpace(""));
// console.log(containsSpace("     "));




// function countAs(str){
//   let count = 0
//   for (let i = 0;i < str.length; i++){
//     if (str.charAt(i)=== "a" || str.charAt(i) === "A"){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countAs("Lady Gaga"))



function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1;i >= 0; i -- ) {
    reversed += str.charAt (i);
  }
  return reversed;
}
console.log(reversed("BANANA"));
