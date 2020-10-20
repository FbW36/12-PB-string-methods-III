// 13-Programming Basics: string methods

// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let str = "Hello World";
console.log(str.toUpperCase()); // HELLO WORLD

// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let str2 = "Hello Earthling";
console.log(str2.toLowerCase()); // hello earthling

// 3. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.
let str3 = "Bananas";
// let str4 = str3[0] + str3 + str3[0];
// console.log(str4);
// let str4 = str3[0].concat(str3).concat(str3[0]);
// console.log(str4);
console.log(
  str3
    .replace(str3[0], str3[0].concat(str3[0]))
    .replace(str3[str3.length - 1], str3[str3.length - 1].concat(str3[0]))
);

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
let str4 = "Scritch";
console.log(str4.substring(4) + str4 + str4.substring(4)); // tchScritchtch

// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.
const str5 = "BoogieWoogie";
const firstLetter = str5[0];
const lastLetter = str5[str5.length - 1];
const remainderString = str5.substring(1, str5.length - 1);
console.log(lastLetter + remainderString + firstLetter); // eoogieWoogiB

// 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let str6 = "the quick brown fox";
console.log(str6.replace(str6[0], str6[0].toUpperCase(str6[0]))); // The quick brown fox
// const name = 'ciamac'
// const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
// console.log("First uppercase letter", nameCapitalized)
