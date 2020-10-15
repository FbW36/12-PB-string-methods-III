// 1
let str1 = "Hello World";
console.log("str1 ==> ", str1.toUpperCase(str1));

// 2
let str2 = "Hello Earthling";
console.log("str2 ==> ", str2.toLowerCase(str2));

// 3
let str3 = "Bananas";
let add = str3.charAt(0);
console.log(str3 + " =>", add + str3 + add);

// 4
let str4 = "Scritch";
let add2 = str4.slice(-3);
console.log(str4 + " =>", add2 + str4 + add2);

// 5
let str5 = "BoogieWoogie";
let add3 = str5.slice(0, 1);
let add4 = str5.slice(1, -1);
let add5 = str5.slice(-1);
console.log(str5 + " =>", add5 + add4 + add3);

// 6
let str6 = "the quick brown fox";
let cap = str6.charAt(0);
let str7 = str6.slice(1);
console.log(
  "Capitalize the first letter of that string ==>",
  cap.toUpperCase() + str7
);
