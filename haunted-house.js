// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Shauntiara Williams");
console.log("*****************************************************************");

console.log("Your friends have been missing for days, do you do after them?.");
let enterHouse = readline.question("Will you go after your friends? (yes or no) ");
if(enterHouse == "yes") {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log("Your friends told you they'd be checking out the abandoned "+
  "manor on Market three days ago, and no ones heard from them since. The manor is " +
  "the neighborhood conspiracy headquarters. Strange things always happened " +
  "around there; and if you thought you could get any animal near it, you'd be" +
  " setting yourself up for a fight. Even the calmest, nicest, sweetest of animals"+
  " would start growling and whining, refusing to go anywhere near that manor. "+
  "The manor has been there for centuries, there is a photo of the manor from "+
  "1715, and manor still looked old.");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  let beBrave = readline.question("As you walk in the manor, a screech is heard from above the spiral staircase."+
  " Do you go check it out, or do you dip? (brave or dip)")
  if (beBrave == "dip"){
    console.log ("You survived, but a spirit attached itself to you. As you ran from the manor, you blacked out...");
  }else if (beBrave== "brave"){
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("You slowly made your way up the stairs, one creeked and the sound"+
  " of scurring was heard through out the manor. Echoing through the dead halls of the home. "+
  " As the scurring turned into silence, you turn to run, but you notice a hand "+
  "resting on your shoulder...but you don't feel it. ");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  let hand = readline.question(" Do you scream and run, calmly turn around or attack?")
  }
}
