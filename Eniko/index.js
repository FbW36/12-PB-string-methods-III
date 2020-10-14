// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let var1 = "Hello World"
console.log(" Covert the value to upper case and print the converted value to the console: " + var1.toUpperCase());

// Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let var2 = "Hello Earthling"
console.log("Convert the value to lower case and print the converted value to the console: " + var2.toLowerCase());

// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.
let var3 = "Bananas"
console.log("Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: " + var3[0] + var3 + var3[0]);

// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
let var4 = "banananana"
console.log("Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string: " + var4.substr(7, 10) + var4 + var4.substring(7, 10));

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.
let var5 = "Bahama Mama"
console.log(" Create a new string from a given string by changing the position of first and last characters: " + var5[10] + var5.substr(1, 9) + var5[0]);

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let var6 = "the quick brown fox"
console.log("Capitalize the first letter of that string: " + var6.charAt(0).toUpperCase() + var6.slice(1));