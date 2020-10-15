// 1. Declare a variable with the value of "Hello World".Covert the value to upper case and print the converted value to the console.
let greeting = "Hello World";
console.log(greeting.toUpperCase());

// 2. Declare another variable with the value of "Hello Earthling".Convert the value to lower case and print the converted value to the console
let alienGreeting = "Hello Earthling";
console.log(alienGreeting.toLocaleLowerCase());

// 3.Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.
let Bananas = `Bananas`;
console.log(`B${Bananas}B`);
console.log(`${Bananas[0]}${Bananas}${Bananas[0]}`);

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string.The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
let stritch = `stritch`;
console.log(`${stritch.substring(4, 7)}${stritch}${stritch.substring(4, 7)}`);

// 5. Create a new string from a given string by changing the position of first and last characters.The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.
let boogieWoogie = `BoogieWoogie`;
console.log(
  `${boogieWoogie[boogieWoogie.length - 1]}${boogieWoogie.slice(1, -1)}${
    boogieWoogie[0]
  }`
);

// 6. Declare a variable and assign the value "the quick brown fox"(all in lower case).Capitalize the first letter of that string.Print the result to the console.
let animal = "the quick brown fox";
console.log(`${animal[0].toUpperCase()}${animal.slice(1)}`);
