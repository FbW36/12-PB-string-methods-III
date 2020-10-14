//1
let var1 = "Hello world";
console.log("1==>", var1.toLocaleUpperCase());

//2
let var2 = "Hello Earthling";
console.log("2==>", var2.toLocaleLowerCase());

//3
let var3 = "Bananas";
console.log("3==>", var3.charAt("0") + var3 + var3.charAt("0"));

//4
let var4 = "Scritch";
console.log("4==>", var4.slice(4, 7) + var4 + var4.slice(4, 7));

//5
// BoogieWoogie => eoogieWoogiB
let var5 = "BoogieWoogie";
console.log(
  "5==>",
  var5.slice(0, 11).replace(var5.charAt(0), var5.charAt(11)) + var5[0]
);

//6
let var6 = "the quick brown fox";
console.log("6==>", var6.charAt(0).toUpperCase() + var6.slice(1));
