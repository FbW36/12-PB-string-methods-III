let str1 = "Hello World";
console.log(str1.toUpperCase());

let str2 = "Hello Earthling";
console.log(str2.toLowerCase());

let str3 = 'Bananas';
let substr3 = str3.charAt(0);
console.log('Bananas => ', substr3+str3+substr3);

let str4 = "Scritch";
let substr4 = str4.slice(-3);
console.log('Scritch => ', substr4+str4+substr4);

let str5 = "BoogieWoogie";
let str6 = str5.charAt(0);
let str7 = str5.slice(-1);
let str8 = str5.slice(1, -1);
console.log('BoogieWoogie => ', str7+str8+str6);

let str9 = 'the quick brown fox';
console.log(str9.replace('t', 'T'));

