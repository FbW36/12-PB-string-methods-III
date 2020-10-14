// # Programming Basics: string methods

// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console. 💕
let exampleOne = 'Hello World' ;
console.log('One ==>', exampleOne.toUpperCase()) ; // HELLO WORLD 

// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 💕 💕 
let exampleTwo = 'Hello Earthling' ; 
console.log('Two ==>', exampleTwo.toLowerCase()) ; // hello earthling
 
// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB. 
console.log('Three ==>',exampleOne.charAt(0)+ exampleTwo + exampleOne.charAt(0)) ; // HHello EarthlingH

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
console.log('Four ==>', exampleOne.substr(0, 3) + exampleOne + exampleOne.substr(8, 10)) ; // HelHello Worldrld 

// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB. 
let exampleThree = 'BoggieWoogie';
let firstLetter = exampleThree[0] ; // B
let lastLetter = exampleThree[exampleThree.length -1] ; //e

console.log('exampleThree ==>', firstLetter) ; // B
console.log('exampleThree ==>', lastLetter) ; // e

console.log('exampleThree ==>', lastLetter + exampleThree.substring(1) + firstLetter) ; // exampleThree ==> eoggieWoogieB


// 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let str = 'the quick brown fox' ;
console.log('str ==>', str[0].toUpperCase() + str.substring(1)); 




