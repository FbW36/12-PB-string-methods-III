//1

let sentence = "Hello World";
console.log(sentence.toUpperCase());
//2
let sentence2 = "Hello Earthling";
console.log(sentence.toLowerCase());
//3
let sentence3 = "Bananas";
let firstLetter = sentence3.substring(0, 1);
console.log(firstLetter + sentence3 + firstLetter);
//4
let sentence4 = "Scritch";
let last3Letter = sentence4.slice(-3);
console.log(last3Letter + sentence4 + last3Letter);

//5
let sentence5 = "BoogieWoogie";
let switchLetter = sentence5.slice(1, -1);
console.log(sentence5[11] + switchLetter + sentence5[0]);
//6
//5
let sentence6 = "the quick brown fox";
let firstUpperletter = sentence6[0].toUpperCase();
console.log(firstUpperletter + sentence6.slice(1));
