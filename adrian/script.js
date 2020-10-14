//1.
let a = 'Hello World';
console.log(a.toUpperCase());

//2.
let b = 'Hello Earthling';
console.log(b.toLowerCase());

//3.
let something = 'Bananas';
let ssomethingg = something[0].concat(something).concat(something[0]);
/* let ssomethingg = something
  .replace(something[0], something[0] + something[0])
  .replace(
    something[something.length - 1],
    something[something.length - 1] + something[0]
  ); */
// also let ssomethingg = something[0] + something + something[0]

console.log(ssomethingg);

//4.
let y = 'Scritch';
let ytch = y.slice(-3) + y + y.slice(-3);
console.log(ytch);

//5.
let boogie = 'BoogieWoogie';
let changedBoogie = boogie.slice(1).slice(0, -1).concat(boogie[0]);
console.log(changedBoogie);

//6
let aString = 'the quick brown fox';
let capitalizedAString = aString.charAt(0).toUpperCase() + aString.slice(1);
console.log(capitalizedAString);
