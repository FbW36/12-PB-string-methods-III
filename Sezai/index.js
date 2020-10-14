// 1.
let str1 = "Hello World";
console.log("str1 ==> ", str1.toUpperCase());

// 2.
let str2 = "Hello Earthling";
console.log("str2 ==> ", str2.toLowerCase());

// 3.
console.log(str1.length);
let str3 = "Bananas"
console.log("str3 ==> ", str1.slice(0,1)+str3+str1.slice(0,1));

// 4.
console.log(str2.length);
let str4 = "Scritch";
console.log("str4 ==> ", str2.slice(-3)+str4+str2.slice(-3));

// 5.
let str5 = "BoogieWoogie";
console.log(str5.length);
console.log("str5 ==>", str5.substring(11)+str5.substring(1,11)+str5.substring(0,1));

// 6.
let str6 = "the quick brown fox";
 str6Capitalized = str6.charAt(0).toUpperCase() + str6.slice(1)
console.log("str6 ==> ", str6Capitalized);