let x1 = 42; // 10
let x2 = 0b101010; // 0b - 2
let x3 = 0o52; // 0o - 8
let x4 = 0x2a; // 0x - 16
let x5 = 0x2a; // x4 = x5

console.log(x1, x2, x3, x4, x5);

let y1 = 42.0;
let y2 = 42; // 42. = 42

let y3 = 0.42e2; // 0.42 * (10 ** 2) // ** is ^ (power) in JS
let y4 = 0.42e2;

let y5 = 42000e-3; // 42000/(10 ** 3)

console.log(y1, y2, y3, y4, y5);

const decimal = 111;
const binary = 0b111;
const hex = 0x111;

let Inf = Infinity;

const notAnumber = NaN; //  NaN != NaN

let x;
x %= 5;
x **= 5;
x += 1;

// Conversion to a number
const value = '100';
Number(value); // conversion of a text literal to a number;
let newVar = +value; // adding a + before a variable turns its value to a number;
//testing the 3 lines above:
let type = typeof newVar;
console.log(`${newVar}, ${type}`);

parseInt, parseFloat; // converts to a number text, which it can read
//testing the line above:
const testText1 = '100 usd';
const testText2 = '100usd';
const testText3 = 'one hundred usd';
const testText4 = 'onehundred usd';
const testText5 = 'onehundredusd';

console.log(`'100 usd' => ${parseInt(testText1)}`);
console.log(`'100usd' => ${parseInt(testText2)}`);
console.log(`'one hundred usd' => ${parseInt(testText3)}`);
console.log(`'onehundred usd' => ${parseInt(testText4)}`);
console.log(`'onehundredusd' => ${parseInt(testText5)}`);

let testText1f = parseInt(testText1);
let testText2f = parseInt(testText2);
let testText3f = parseInt(testText3);
let testText4f = parseInt(testText4);
let testText5f = parseInt(testText5);

type = 0;
for (test = 1; test <= 5; test++) {
  switch (test) {
    case 1:
      type = typeof testText1f;
      console.log(`parseInt(testText1) / 100 usd = ${type}`);
      break;

    case 2:
      type = typeof testText2f;
      console.log(`parseInt(testText2) / 100usd = ${type}`);
      break;

    case 3:
      type = typeof testText3f;
      console.log(`parseInt(testText3) / one hundred usd = ${type}`);
      break;

    case 4:
      type = typeof testText4f;
      console.log(`parseInt(testText4) / onehundred usd = ${type}`);
      break;

    case 5:
      type = typeof testText5f;
      console.log(`parseInt(testText5) / onehundredusd = ${type}`);
      break;
  }
}

console.log(
  `parseInt(testText1) + parseInt(testText2) = ${parseInt(testText1)} + ${parseInt(testText2)}`,
);
console.log(
  `+parseInt(testText1) + +parseInt(testText2) = ${+parseInt(testText1)} + ${+parseInt(testText5)}`,
);
console.log(
  `parseInt(testText1) + parseInt(testText2) = +${parseInt(testText1)} + +${parseInt(testText5)}`,
);
console.log(
  `parseInt(parseInt(testText1)) + parseInt(parseInt(testText2)) = ${parseInt(
    parseInt(testText1),
  )} + ${parseInt(parseInt(testText2))}`,
);
console.log(
  `parseInt(parseInt(testText1)) + parseInt(parseInt(testText2)) = parseInt(${parseInt(
    testText1,
  )}) + parseInt(${parseInt(testText2)})`,
);
console.log(
  `parseInt(testText1) + parseInt(testText5) = ${parseInt(testText1)} + ${parseInt(testText5)}`,
);

console.log('       = E X P E R I M E N T =');
let num1 = testText1;
console.log(`num1 = ${num1}`);
let num2 = testText2;
console.log(`num2 = ${num2}`);

let parsedNum1 = parseInt(testText1);
console.log(`parsedNum1 = ${parsedNum1}`);
let parsedNum2 = parseInt(testText2);
console.log(`parsedNum2 = ${parsedNum2}`);

let sum = parsedNum1 + parsedNum2;
console.log(`sum = ${sum}`);

//NUMBER ROUNDING:
let x = 12.1;

console.log('Math.floor(x)', Math.floor(x), 'целое <= x'); // === round down
console.log('Math.ceil(x)', Math.ceil(x), 'целое >= x'); //  === round up
console.log('Math.round(x)', Math.round(x), 'ближайшее целое');
console.log('Math.trunc(x)', Math.trunc(x), 'целое, без дробной части');

console.log('x.toFixed(0)', x.toFixed(0)); // === () - number of digits after the comma

//isNumber ?
const input = '12';

console.log(+input);

if (input.trim() && isFinite(input)) {
  console.log('OK');
} else {
  console.log('Error');
}

//Random
for (let i = 0; i < 10; i++) {
  const x = Math.random(); // from 0 to 1
  console.log(x);
}

for (let i = 0; i < 10; i++) {
  const x = Math.random() * 5; // from 0 to 5
  console.log(x);
}

for (let i = 0; i < 10; i++) {
  const x = Math.random() * 5 + 2; // from 2 to 7, where 5 is a count of numbers to be shown after the mumber, which stays after the plus (2, 3, 4, 5, 6 - 5 numbers starting from 2).
  console.log(x);
}
