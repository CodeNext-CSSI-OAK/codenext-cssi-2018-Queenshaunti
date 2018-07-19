//Author: Shauntiara LastName

/******************************************************************************
                                   stringTimes()

Instructions:
Given a string and a non-negative integer n, return a larger string that is n
copies of the original string.

Examples:
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*******************************************************************************/

function stringTimes(str, n) {
let returnString = "";
let i = 0
for (let i = 0; i < n; i ++){
  returnString+= str;

}
return returnString;
}
// Test this function.
testStringTimes();

/******************************************************************************
                                   countXX()

Instructions:
Count the number of "xx" in the given string. We'll say that overlapping is
allowed, so "xxx" contains 2 "xx".

Examples:
countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3
*******************************************************************************/

function countXX(str) {
let count = 0;
for (let i = 0; i < str.length - 1;i++){
    if (str.substring (i, i + 2) === 'xx'){
      count++;
    }
}
return count;
}

// Test this function.
testCountXX();

/******************************************************************************
                                   bobThere()

Instructions:
Return true if the given string contains a "bob" string, but where the middle
'o' char can be any char.

Examples:
bobThere("abcbob") → true
bobThere("b9b") → true
bobThere("bac") → false
*******************************************************************************/

function bobThere(str) {

}

// Test this function.
testBobThere();

/******************************************************************************
                                   countCode()

Instructions:
Return the number of times that the string "code" appears anywhere in the given
string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

Examples:
countCode("aaacodebbb") → 1
countCode("codexxcode") → 2
countCode("cozexxcope") → 2
*******************************************************************************/

function countCode(str) {

}

// Test this function.
testCountCode();

/******************************************************************************
                                   xyBalance()

Instructions:
We'll say that a string is xy-balanced if for all the "x" characters in the
string, there exists a "y" character somewhere later in the string. So "xxy" is
balanced, but "xyx" is not. One "y" can balance multiple "x"s. A string without
any "x"s is balanced by default, since there are no "x"s to unbalance it. Return
true if the given string is xy-balanced.

Examples:
xyBalance("aaxbby") → true
xyBalance("aaxbb") → false
xyBalance("bbb") → true
*******************************************************************************/

function xyBalance(str) {

}

// Test this function.
testXyBalance();

/****************************************************************************
                                    Tests
*****************************************************************************/
function testStringTimes() {
  console.log();
  console.log("stringTimes(\"Hi\", 2) → \"HiHi\" " + "\"" + stringTimes("Hi", 2) + "\"");
  console.log("stringTimes(\"Hi\", 3) → \"HiHiHi\" " + "\"" + stringTimes("Hi", 3) + "\"");
  console.log("stringTimes(\"Hi\", 1) → \"Hi\" " + "\"" + stringTimes("Hi", 1) + "\"");
  console.log("stringTimes(\"Hi\", 0) → \"\" " + "\"" + stringTimes("Hi", 0) + "\"");
  console.log("stringTimes(\"Hi\", 5) → \"HiHiHiHiHi\" " + "\"" + stringTimes("Hi", 5) + "\"");
  console.log("stringTimes(\"Oh Boy!\", 2) → \"Oh Boy!Oh Boy!\" " + "\"" + stringTimes("Oh Boy!", 2) + "\"");
  console.log("stringTimes(\"x\", 4) → \"xxxx\" " + "\"" + stringTimes("x", 4) + "\"");
  console.log("stringTimes(\"\", 4) → \"\" " + "\"" + stringTimes("", 4) + "\"");
  console.log("stringTimes(\"code\", 2) → \"codecode\" " + "\"" + stringTimes("code", 2) + "\"");
  console.log("stringTimes(\"code\", 3) → \"codecodecode\" " + "\"" + stringTimes("code", 3) + "\"");
}

function testCountXX() {
  console.log();
  console.log("countXX(\"abcxx\") → 1 " + countXX("abcxx"));
  console.log("countXX(\"xxx\") → 2 " + countXX("xxx"));
  console.log("countXX(\"xxxx\") → 3 " + countXX("xxxx"));
  console.log("countXX(\"abc\") → 0 " + countXX("abc"));
  console.log("countXX(\"Hello there\") → 0 " + countXX("Hello there"));
  console.log("countXX(\"Hexxo thxxe\") → 2 " + countXX("Hexxo thxxe"));
  console.log("countXX(\"\") → 0 " + countXX(""));
  console.log("countXX(\"Kittens\") → 0 " + countXX("Kittens"));
  console.log("countXX(\"Kittensxxx\") → 2 " + countXX("Kittensxxx"));
}

function testBobThere() {
  console.log();
  console.log("bobThere(\"abcbob\") → true " + bobThere("abcbob"));
  console.log("bobThere(\"b9b\") → true " + bobThere("b9b"));
  console.log("bobThere(\"bac\") → false " + bobThere("bac"));
  console.log("bobThere(\"bbb\") → true " + bobThere("bbb"));
  console.log("bobThere(\"abcdefb\") → false " + bobThere("abcdefb"));
  console.log("bobThere(\"123abcbcdbabxyz\") → true " + bobThere("123abcbcdbabxyz"));
  console.log("bobThere(\"b12\") → false " + bobThere("b12"));
  console.log("bobThere(\"b1b\") → true " + bobThere("b1b"));
  console.log("bobThere(\"b12b1b\") → true " + bobThere("b12b1b"));
  console.log("bobThere(\"bbc\") → false " + bobThere("bbc"));
  console.log("bobThere(\"bbb\") → true " + bobThere("bbb"));
  console.log("bobThere(\"bb\") → false " + bobThere("bb"));
  console.log("bobThere(\"b\") → false " + bobThere("b"));
}

function testCountCode() {
  console.log();
  console.log("countCode(\"aaacodebbb\") → 1 " + countCode("aaacodebbb"));
  console.log("countCode(\"codexxcode\") → 2 " + countCode("codexxcode"));
  console.log("countCode(\"cozexxcope\") → 2 " + countCode("cozexxcope"));
  console.log("countCode(\"cozfxxcope\") → 1 " + countCode("cozfxxcope"));
  console.log("countCode(\"xxcozeyycop\") → 1 " + countCode("xxcozeyycop"));
  console.log("countCode(\"cozcop\") → 0 " + countCode("cozcop"));
  console.log("countCode(\"abcxyz\") → 0 " + countCode("abcxyz"));
  console.log("countCode(\"code\") → 1 " + countCode("code"));
  console.log("countCode(\"ode\") → 0 " + countCode("ode"));
  console.log("countCode(\"c\") → 0 " + countCode("c"));
  console.log("countCode(\"\") → 0 " + countCode(""));
  console.log("countCode(\"AAcodeBBcoleCCccoreDD\") → 3 " + countCode("AAcodeBBcoleCCccoreDD"));
  console.log("countCode(\"AAcodeBBcoleCCccorfDD\") → 2 " + countCode("AAcodeBBcoleCCccorfDD"));
  console.log("countCode(\"coAcodeBcoleccoreDD\") → 3 " + countCode("coAcodeBcoleccoreDD"));
}

function testXyBalance() {
  console.log();
  console.log("xyBalance(\"aaxbby\") → true " + xyBalance("aaxbby"));
  console.log("xyBalance(\"aaxbb\") → false " + xyBalance("aaxbb"));
  console.log("xyBalance(\"yaaxbb\") → false " + xyBalance("yaaxbb"));
  console.log("xyBalance(\"yaaxbby\") → true " + xyBalance("yaaxbby"));
  console.log("xyBalance(\"xaxxbby\") → true " + xyBalance("xaxxbby"));
  console.log("xyBalance(\"xaxxbbyx\") → false " + xyBalance("xaxxbbyx"));
  console.log("xyBalance(\"xxbxy\") → true " + xyBalance("xxbxy"));
  console.log("xyBalance(\"xxbx\") → false " + xyBalance("xxbx"));
  console.log("xyBalance(\"bbb\") → true " + xyBalance("bbb"));
  console.log("xyBalance(\"bxbb\") → false " + xyBalance("bxbb"));
  console.log("xyBalance(\"bxyb\") → true " + xyBalance("bxyb"));
  console.log("xyBalance(\"xy\") → true " + xyBalance("xy"));
  console.log("xyBalance(\"y\") → true " + xyBalance("y"));
  console.log("xyBalance(\"x\") → false " + xyBalance("x"));
  console.log("xyBalance(\"\") → true " + xyBalance(""));
  console.log("xyBalance(\"yxyxyxyx\") → false " + xyBalance("yxyxyxyx"));
  console.log("xyBalance(\"yxyxyxyxy\") → true " + xyBalance("yxyxyxyxy"));
  console.log("xyBalance(\"12xabxxydxyxyzz\") → true " + xyBalance("12xabxxydxyxyzz"));
}
