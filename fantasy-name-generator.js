// // Author: FirstName LastName
// let readline = require("readline-sync");
//
// // global variables
// let firstName, lastName, favoriteAnimal, cityBorn, dreamCar, street, fantasyName;
//
// /******************************************************************************
//                                   getNewFirstName()
//
//   This function returns the user's new first name. To do so, concatenate the
//   first 3 letters of their real first name and the first 2 letters of their
//   real last name.
// *******************************************************************************/
//
// function getNewFirstName() {
//
//   return firstName.substring (0,3) + lastName.substring(0,2).toLowerCase() ;
//
// }
//
//
// /******************************************************************************
//                                   getNewLastName()
//
//   This function returns the user's new last name. To do so, concatenate the
//   first 2 letters of their favorite Animal and the first 3 letters of the
//   city where they were born.
// *******************************************************************************/
//
// function getNewLastName() {
//     return favoriteAnimal.substring(0,2) + cityBorn.substring(0,3).toLowerCase();
// }
//
// /******************************************************************************
//                                   getTitle()
//
//   This function returns the user's title. To do so, concatenate the last three
//   letters of their real last name, reversed, and the model of their dream car.
// *******************************************************************************/
//
// function getTitle() {
//   return lastName.charAt(lastName.length - 1) + lastName.charAt(lastName.length - 2) + lastName.charAt(lastName.length - 3) + dreamCar();
// }
//
// /******************************************************************************
//                                   getHonorific()
//
//   This function returns the user's full honorific. To do so, concatenate their
//   title, " of ", and the name of the street they live on.
// *******************************************************************************/
//
// function getHonorific() {
//
// }
//
// /******************************************************************************
//                                      run()
//
//   This function runs the program. At the very least it should ask the user
//   to answer a series of questions, each setting one of the global variables
//   to what the user typed in. It should then call the functions above to produce
//   the user's fantasy name (set fantasyName to that), and display it for the user
//   to see.
// *******************************************************************************/
//
// function run() {
//   firstName = readline.question("What's your first name? ");
//   lastName = readline.question("What's your last name?");
//   favoriteAnimal = readline.question("What's your favorite animal?");
//   cityBorn =  readline.question(" What city were you born in?");
//   dreamCar = readline.question("What is your dream car?");
//console.log(getNewFirstName()  + " " + getNewLastName());
// }
//
// // Run the program!
// run();
let count = 5
let input = ""
while (input < 0){
  console.log("Sup");
  count --;
}


let str = "ABCDE"
for (let i = 0;i < str.length;i++){
  console.log(str.charAt(i));
}

let str = "ABCDE"
for (;;)
