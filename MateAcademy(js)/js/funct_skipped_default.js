function sum(a, b = 0) {
  console.log(`${a} + ${b}`);
  return a + b;
}

const result = sum(3, 5);

console.log(result);

/* 
It is a good practice to set the default values for the last variables to allow entering some obligatory values first. 
What one enters is the first, seond and etc.variable and if not all values are added, the last variables that were missed will get their default ones.
 */


// Giving more arguments than a function can accept and detecting the extra ones:
function myValues1(c, d) {
  console.log(c, d);
  console.log(arguments);
}

function myValues2(c, d, ...args) {
  console.log(c, d);
  console.log(args);
}

function myValues3(...args) {
  console.log(arguments);
  console.log(args);
}

myValues1(1, 2, 3, 4);
myValues2(1, 2, 3, 4);
myValues3(1, 2, 3, 4);