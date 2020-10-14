let str = "Hello World";

let strUpper = str.toUpperCase();

console.log(strUpper);

let str2 = "Hello Earthling"

let strLower = str2.toLowerCase();

console.log(strLower);

let str3 = " ";
let strSub = "B";

let str3add = str3.concat(strSub, "Bananas",strSub);

console.log('Bananas ==> ', str3add);

let str4 = "Scritch";

let str4Replace = str4.replace("Scritch", "tchScritchtch");
console.log('Scritch ==> ', str4Replace);

let str5 = "BoogieWoogie";

let str5Replace = str5.replace("BoogieWoogie", "eoogieWoogiB");
console.log('BoogieWoogie ==> ', str5Replace);

let str6 = "the qick brown fox";

let str6FirstUpper = str6.replace("t", str6[0].toUpperCase());
console.log(str6FirstUpper);