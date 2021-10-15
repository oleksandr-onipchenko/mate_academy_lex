// ? (ternary operator)
console.log('     << Test #1 >>');

let age = 25;
let message = age > 18 ? 'Adult' : 'Child';

if (age > 18) {
  message = 'Adult';
} else {
  message = 'Child';
}

console.log(message);

// Adult-child-baby example written with "?"
console.log('     << Test #2 >>');

let years = 3;
let status = years > 18 ? 'Adult' : years > 7 ? 'Teen' : years > 3 ? 'Child' : 'Toddler';

console.log(status);

/* 
- if => used for the COMMANDS EXECUTION based on a condition set;
- ternary operator => used for a VALUE SELECTION based on a condition set
 */
