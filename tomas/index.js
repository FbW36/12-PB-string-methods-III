// Covert the value to upper case and print the converted value to the console
let str1 = 'Hallo World'
console.log('answer 1 -->', str1.toUpperCase())

// Convert the value to lower case and print the converted value to the console
let str2 = 'Hallo Earthling'
console.log('answer 2 -->', str2.toLowerCase())

// Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
let str3 = 'Bananas'
console.log('answer 3 -->', str3[0] + str3 + str3[0])

// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
let str4 = 'Scritch'
console.log('answer 4 -->', str4.slice(-3) + str4 + str4.slice(-3))

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
let str5 = 'BoogieWoogie'
let str6 = str5.substring(1, str5.length-1)
console.log('answer 5 -->', str5[str5.length-1] + str6 + str5[0])

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console
let str7 = 'the quick brown fox'
console.log('answer 6 -->', str7.charAt(0).toUpperCase())