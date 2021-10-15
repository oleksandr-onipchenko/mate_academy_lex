// === strict comparison VS == not a strict comparison
console.log(2 === 2.0, 2 == 2.0);

console.log(2 === '2.0', 2 == '2.0');

console.log(NaN === NaN, Object.is(NaN, NaN));

console.log('2' > 18);
console.log(2 > '18');
console.log(+'2' > 18); // explicitly converting a text to a number
console.log(2 > +'18'); // explicitly converting a text to a number
console.log('2' > '18');
