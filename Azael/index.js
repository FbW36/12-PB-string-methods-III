// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let helloWorld = "Hello World";

console.log("helloWorld==> ", helloWorld.toUpperCase());

// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let earth = "Hello Earthling";

console.log("earth ==>", earth.toLowerCase());

// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.

let octopus = "Octopus";
octopus = octopus.charAt(0) + octopus + octopus.charAt(0);

console.log("octopus==>", octopus);

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.

let chorizo = "chorizo";
chorizo = chorizo.slice(4, 7) + chorizo + chorizo.slice(4, 7);
console.log("chorizo ==>", chorizo);

// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.

let veryCool = "VeryCool";
let firstLetter = veryCool[0];
let lastLetter = veryCool[veryCool.length - 1];
console.log("last letter", lastLetter);
let middleLetters = veryCool.substring(1, veryCool.length - 1);
console.log("middle is:", middleLetters);
console.log("result", lastLetter + middleLetters + firstLetter);

// 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let foxie = "the quick brown fox";
let firstLetter1 = foxie[0];
let capitalizeFirstLetter = firstLetter1.toUpperCase();
let middleLetters1 = foxie.substring(1, 19);
console.log("why?", capitalizeFirstLetter + middleLetters1);
