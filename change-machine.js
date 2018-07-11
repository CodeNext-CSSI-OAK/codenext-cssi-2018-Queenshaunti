// Author: Shautiara Williams
let readline = require('readline-sync');

let cents = Number(readline.question('Please enter cents as a positive integer: '));
let quarters = Math.floor(cents / 25);
console.log('quarters =' + quarters);

let remainderDimes = Math.floor(cents % 25);
let dimes = Math.floor( remainderDimes/10);
console.log( 'dimes =' + dimes);

let remainderNickle = Math.floor(cents % 10);
let nickles = Math.floor (remainderNickle / 5);
console.log('nickles =' + nickles);

let remainderPennies = Math.floor(cents % 5);
let pennies = Math.floor(remainderPennies / 1);
console.log ('pennies =' + pennies);
