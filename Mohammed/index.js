// 1.
let lowerCaseStr ='Hello World';
let upperCaseStr = lowerCaseStr.toUpperCase();
console.log(`The Upper Case form of the string '${lowerCaseStr}' is '${upperCaseStr}'`);

// 2.
upperCaseStr ='Hello Earthling';
lowerCaseStr = upperCaseStr.toLowerCase();
console.log(`The Lower Case form of the string '${upperCaseStr}' is '${lowerCaseStr}'`);

// 3.
let mainStr = "Bananas";
let str1 = mainStr.charAt(0);
/* console.log(str1); */
let strConcat = str1.concat(mainStr, str1);
console.log(strConcat); 

// 4.
mainStr = "Scritch";
let strExtractPosition = mainStr.length-3;
/* console.log(strExtractPosition); */
subStr = mainStr.slice(strExtractPosition);
/* console.log(subStr); */
strConcat =subStr.concat(mainStr, subStr);
console.log(strConcat);

// 5.
mainStr = "BoogieWoogie";

let strFirstPos = mainStr.charAt(0);
let strLastPos = mainStr.charAt(mainStr.length-1);
/* console.log(strFirstPos, strLastPos);  */

let strReplacePos = mainStr.replace(strFirstPos, strLastPos);
/* console.log(strReplacePos); */

strReplacePos = strReplacePos.substring(0, strReplacePos.length - 1);
/* console.log(strReplacePos); */

strReplacePos = strReplacePos + strFirstPos;
console.log(`The replacement of first and last items of the string '${mainStr}' is ${strReplacePos}`);

// 6.
mainStr = "the quick brown fox";
let firstLetterCapitalized = mainStr.charAt(0).toUpperCase() + mainStr.slice(1);
console.log(`The original string is '${mainStr}' Its first capitalized letter is '${firstLetterCapitalized}'`);