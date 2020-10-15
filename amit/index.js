// 1 touppercase()
let str = "Hello World";
console.log("q1a:", str.toUpperCase());

//2 lowercase()
str2 = "Hello World";
console.log("q2a:", str2.toLowerCase());

// 3
let str3 = "Bananas";
console.log("q3a:", str3.replace("Bananas", "BBananasB")); // BBananasB.
//or
const firstChar = str3[0];
console.log(`${firstChar}${str3}${firstChar}`);

// 4
let str4 = "Scritch";
console.log("q4a:", str4.replace("Scritch ", "tchScritchtch"));
//or
let secondchar = str4.substring(str4.length - 3);
console.log(`${secondchar}${str4}${secondchar}`);

5;
let str5 = "BoogieWogie";
console.log("q5a:", str5.replace("BoogieWogie", "eoogieWoogiB"));

// or even
let first = str5[0];
let end = str5[str5.length - 1];
let middle = str5.substring(1, str5.length - 1);
console.log("middle", middle);
console.log("5th", end + middle + first);

// 6
let str6 = "the quick brown fox";
console.log("q6a:", str6.charAt(0).toUpperCase() + str6.slice(1)); // T
