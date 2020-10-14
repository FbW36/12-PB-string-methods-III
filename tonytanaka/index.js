// exercise 1
let var1 = "Hello World";
console.log(var1.toUpperCase());

// exercise 2
let var2 = "Hello Earthling";
console.log(var2.toLowerCase());

// exercise 3
let var3 = "Javacript";
let var3a = var3[0];
console.log(var3a + var3 + var3a);

// exercise 4
let var4 = "Programming";
let position = var4.length - 3;
console.log(position);
let var4a = var4.slice(position, position + 3);
console.log(var4a + var4 + var4a);

// exercise 5
let var5 = "Bootstrap";
let var5a = var5[0];
let var5b = var5[var5.length - 1];
let var5c = var5.substring(1, var5.indexOf(var5b));
console.log(var5b + var5c + var5a);

// exercise 6
let var6 = "the quick brown fox";
let var6a = var6[0];
let var6b = var6.substring(1);
console.log(var6a.toUpperCase() + var6b);
