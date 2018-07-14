// Author: FirstName LastName
let readline = require("readline-sync");

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
 console.log("Greetings Alien, to learn your english numbers, type in a number "+
 "and let me help!");

}

/******************************************************************************
  This function takes a number between 1 and 9 (inclusive) as input and returns
  that same number in word form. If the number is not between 1 and 9, the
  function returns an empty string, which is just "".

  Examples:
  sayZeroNine(5) → "five"
  sayZeroNine(8) → "eight"
  sayZeroNine(13) → ""
*******************************************************************************/
function sayZeroNine(num) {
    if (num === 1){
      return "one"
    }

    if (num === 2){
      return "two"
    }
    if (num === 3){
      return "three"
    }
    if (num === 4){
        return "four"
      }
    if (num === 5){
      return "five"
    }
     if (num === 6){
       return "six"
     }
     if (num === 7){
       return "seven"
     }
     if ( num === 8){
       return "eight"
     }
     if (num === 9){
       return "nine"
     }
     if (num < 1 || num > 9){
       return ""
     }
}

/******************************************************************************
  This function takes a number between 10 and 19 (inclusive) as input and returns
  that same number in word form. If the number is not between 10 and 19, the
  function returns an empty string, which is just "".

  Examples:
  sayTenNineteen(11) → "eleven"
  sayTenNineteen(15) → "fifteeen"
  sayTenNineteen(25) → ""
*******************************************************************************/
function sayTenNineteen(num) {
  if (num === 10){
    return "ten"
  }
  if (num === 11){
    return "eleven"
  }
  if (num === 12){
    return "twelve"
  }
  if ( num === 13){
    return "Thirteen"
  }
  if (num === 14){
    return "Fourteen"
  }
  if ( num === 15){
    return "Fifteen"
  }
  if ( num === 16){
    return "Sixteen"
  }
  if (num === 17){
    return "Seventeen"
  }
  if(num === 18){
    return "Eighteen"
  }
  if (num === 19){
    return "Nineteen"
  }
  if ( num > 19 || num < 10){
    return ""
  }
}

/******************************************************************************
  This function takes a number between 2 and 9 (inclusive) as input and returns
  that same number in word form, but in the tens place. If the number is not
  between 2 and 9, the function returns an empty string, which is just "".

  Examples:
  sayTwentyNinety(5) → "fifty"
  sayTwentyNinety(8) → "eighty"
  sayTwentyNinety(1) → ""
*******************************************************************************/
function sayTwentyNinety(num) {
  if (num === 2){
    return "Twenty"
  }
  if (num === 3){
    return "Thirty"
  }
  if (num === 4){
    return "Fourty"
  }
  if (num === 5){
    return "Fifty"
  }
  if (num === 6){
    return "Sixty"
  }
  if ( num === 7){
    return "Seventy"
  }
  if ( num === 8){
    return "Eighty"
  }
  if (num === 9){
    return "Ninety"
  }
  if (num < 2 || num > 9){
    return ""
  }
}

/********************************&**********************************************
  This function calls the three functions above to convert an entire number (num)
  into word form, then returns that word. This function should be able to handle
  numbers from 0 to 9999 (inclusive).

  To do this, first declare a variable named wordForm at the top of the
  function. This will be the string you will return at the end of the function,
  so initialize it to an empty string at the start: let wordForm = "";

  Your first conditional statement should check if num is equal to 0. If so,
  set wordForm to the string "zero".

  Otherwise, build the word form of num by chopping num into thousands,
  hundreds, tens, and ones. Convert each place value number to a word by calling
  the three functions above, and concatenate each word with the wordForm variable.

  At the very end of your function it should simply return wordForm.

  Examples:
  sayNumber(0) → "zero"
  sayNumber(9999) → "nine-thousand nine-hundred ninety-nine"
  sayNumber(9000) → "nine-thousand"
  sayNumber(900) → "nine-hundred"
  sayNumber(9009) → "nine-thousand nine"
  sayNumber(75) → "seventy-five"
*******************************************************************************/
function sayNumber(num) {
  let wordForm = ""
  if (num === 0){
    wordForm = "zero"
  }else{
    let ones = num % 10;
    num = Math.floor(num / 10);
    let tens = num % 10;
    num = Math.floor(num / 10);
    let hundreds = num % 10;
    num = Math.floor(num / 10);
    let thousands = num % 10;
    num = Math.floor(num/ 10);

    // If the thousands digit is not zero...
      // concatenate the string form of `thousands` and "-thousand" onto wordForm
    if (thousands > 0) {
       wordForm += sayZeroNine(thousands) + "-thousand " ;
    }
    if (hundreds > 0){
      wordForm += sayZeroNine(hundreds) + "-hundreds "
    }
    if (tens > 0){
      // If tens is 1, call ...
      // otherwise, use sayTwentyNinety
      if (tens === 1){
        wordForm += sayTenNineteen(ones + 10);
        return wordForm
      }else{
        wordForm += sayTwentyNinety(tens)
      }
    }
    if (ones > 0){
      wordForm += "-" + sayZeroNine(ones)
    }
  }
  return wordForm
}

/******************************************************************************
  This function simply runs your program. At the very least it should greet the
  user, ask the user to enter a number between 0 and 9999, then print that
  number in word form.
*******************************************************************************/
function run() {
  let num = Number (readline.question("Enter number between 0 - 9999: "));
  console.log("sayZeroNine "+ sayZeroNine(num))
  console.log("sayTenNineteen "+sayTenNineteen(num));
  console.log("sayTwentyNinety "+ sayTwentyNinety(num));
  console.log("sayNumber "+ sayNumber(num));
  printGreeting();



}
// Run the program!
run();
