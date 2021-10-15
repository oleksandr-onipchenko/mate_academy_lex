/* //  '' and ""  - for texts and symbols;
// `` - for variables and expressions like ${name}.

const name = 'Misha';
const message1 = 'Hello, ' + name + '!'; // concatenation (joining the text segments)
const message2 = `Hello, ${name}!`; // interpolation (inserting a variable into a string between the back ticks (reverse brackets) - `whole_phrase+${}`)

console.log(message1);
console.log(message2);

//экранирующий слэш - to display a special symbol within a string
console.log("\t No,\n it \\ isn't.");
//  \n - new line
//  \t - tab

//  \xA9 = copyright symbol
console.log('\xA9'); // 00 - FF
console.log('\u00A9'); // 0000 - FFFF (UTF-16)
console.log('\u{A9}'); // 0 - 10FFFF (UTF-32)

// JS in HTML doc - use expressions in '' to avoid using the reflecting \, needed if a JS expression is in the HTML doc in "".

// Conversion to a text string
const x = 12345;
console.log(x); // logging a number

console.log(String(x), x.toString(), '' + x, `${x}`); */

// A string's length:
const a = 'Michael';
const b = 'John';

console.log(
  `LENGTH
  a = ${a.length} symbols;
b = ${b.length} symbols.`,
);
console.log('---------------------');

//Get a symbol from a string:
let str = 'abcde';
console.log(str[0], str.charAt(0));

console.log(str[20], str.charAt(20)); //[] - will return 'undefined'; charAt() - will return '' (empty string);

//It is not possible to replace a symbol in a JS string using `=` (this will not work - that's why it is important to use the 'use strict' directive):
let str1 = 'abcde';
str1[2] = 'Q';

//string iteration:
console.log('       String iteration');

const word = 'Hello world';

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

//a string's reverse iteration:
console.log("       A string's reverse iteration");

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

//a by-char iteration (if we do not need to work with a string's indexes, we can use this shorter iteration version):
console.log('       a by-char iteration');

for (let letter of word) {
  console.log(letter);
}

//finding a subsctring:
console.log('       finding a subsctring');

const string = 'abcdebc';
const substring = 'bc';

console.log(string.includes(substring)); //includes - a confirmation of the fact that a SUBSTRING is a part of a STRING;
console.log(string.indexOf(substring)); //finding a place (index) of the first substring's location; If not found, '-1' is returned;
console.log(string.includes(substring, 3)); //includes - a confirmation of the fact that a SUBSTRING is a part of a STRING starting from a selected index;
console.log(string.indexOf(substring, 5)); //finding a place (index) of the first substring's location starting from a selected index;
console.log(string.lastIndexOf(substring)); //finding a place (index) of the last substring's location;
console.log(string.startsWith(substring)); //checking if a string starts with a substring;
console.log(string.endsWith(substring)); //checking if a string ends with a substring;

//case swapping:
console.log('       case swapping');
let message = 'Hi, Guys!';
let smallcase = 'small case';
let caps = 'CAPS';

console.log(smallcase.toUpperCase());
console.log(caps.toLowerCase());
console.log(message); // the initial variable's content remains intact as in JS a string is not changeable: a new string's version is created on the basis of the given one while applying different methods to that original variable.

//
