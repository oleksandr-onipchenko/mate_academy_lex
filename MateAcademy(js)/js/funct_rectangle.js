//  ---  rectangle 5*8
/* const a = 5;
const b = 8;

const perimeter = 2 * a + 2 * b;
const square = a * b;

console.log('Rectangle', a,'x',b,':');
console.log('Perimeter is ', perimeter);
console.log('Square is ', square);
console.log('--------------') */

function printRectangleInfo(a, b) {
  const perimeter = 2 * a + 2 * b;
  const square = a * b;

  console.log('Rectangle', a,'x',b,':');
  console.log('Perimeter is ', perimeter);
  console.log('Square is ', square);
  console.log('--------------')
}

//a function can be declared before and after its call.

printRectangleInfo(3, 8);
printRectangleInfo(5, 10);
printRectangleInfo(23, 18); 