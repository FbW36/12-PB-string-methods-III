/*1. Declare a variable with the value of "Hello World".Covert the value to upper case and print the converted value to the console.*/

let str1 = "Hello World";
console.log("1.str1", str1.toUpperCase());

/*2.Declare another variable with the value of "Hello Earthling".Convert the value to lower case and print the converted value to the console.*/

let fun = "Hello Earthling";
console.log("2.fun:", fun.toLowerCase());

/*3.Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.*/

let var2 = "peach";

console.log("3.", var2[0] + var2 + var2[0]);

// 4. *Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string.The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.*/

let string = "String";
let string2 = string.slice(3, 6);
console.log("4.", string2 + string + string2);

/* 5.Create a new string from a given string by changing the position of first and last characters.The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.*/

let var3 = "Doggy";
console.log("5.:", var3[4] + var3.slice(1, 4) + var3[0]);

/*6. Declare a variable and assign the value "the quick brown fox"(all in lower case).Capitalize the first letter of that string.Print the result to the console.*/

// a

let fox = "the quick brown fox";
console.log("fox capital:" + fox[0].toLocaleUpperCase() + fox.substring(1));

// b
console.log("fox capital b:", fox.replace("t", "T"));
