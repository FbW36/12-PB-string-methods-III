1./**Declare a variable with the value of "Hello World". Covert the value to upper case and print the
 converted value to the console.*/
let str1 = "Hello World";
console.log(console.log("str1 ===>", str1.toLocaleUpperCase())); 
/*
2. Declare another variable with the value of "Hello Earthling". 
Convert the value to lower case and print the converted value to the console.*/
let str2 = "Hello Earthling";
console.log(console.log("str2 ===>", str2.toLocaleLowerCase())); 

/*3 .Create a new string from a given string with the first character of the given string added 
at the front and back, i.e., expected output: Bananas => BBananasB.*/
let str3 = "Bananas";
console.log("B"+str3+"B");

/*4. Create a new string from a given string taking the last 3 characters of the string and add them 
to both the front and back of the new string. The string length must be 3 or more, i.e., 
expected output: Scritch => tchScritchtch.*/

let str4 = "Scritch";
console.log("tch"+str4+"tch"); 

/*5. Create a new string from a given string by changing the position of first and last characters.
 The string length must be greater than or equal to 2, i.e., expected output: 
 BoogieWoogie => eoogieWoogiB.*/
let str5 = "BoogieWoogie"
console.log("str5 ==>", str5.replace("B", "e")+"B");


/*6. Declare a variable and assign the value "the quick brown fox" (all in lower case).
 Capitalize the first letter of that string. Print the result to the console.*/

 let str6 = "the quick brown fox";
 console.log("str6 ===>", str6.replace("t", "T") );