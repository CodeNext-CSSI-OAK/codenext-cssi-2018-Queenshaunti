 //  function makeAbba(a, b) {
 //   return a + b + b + a;
 //  }
 //
 //
 //   console.log(makeAbba ("hey", "yo"));
 //
 //  function comboString(a, b) {
 //
 //    if (a.length > b.length){
 //      return b + a +b;
 //    }else{
 //      return a + b + a;
 //    }
 // }
 // console.log(comboString("sad", "happy"));

function lastTwo(str) {
  if (str.length >= 2){
    let lastChar = str.charAt(str.length - 1);
    let secondLastChar = str.charAt(str.length - 2);
    let firstPart = str.substring(0, str.length - 2);
    return firstPart + lastChar + secondLastChar;
  }
  return str;
}
console.log(lastTwo("Hello"));
