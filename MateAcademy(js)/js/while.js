// while - when the number of iterations is not known

let n = 1240;
let count = 0;

// the condition is written in the beginning
console.log('   << while >>');

while (n % 2 === 0) {
  n = n / 2;
  console.log(n);
  count++;
}

console.log(count);

// the condition is written in the end
console.log('   << do ... while >>');

n = 1240;
count = 0;

do {
  n = n / 2;
  console.log(n);
  count++;
} while (n % 2 === 0);

console.log(count);

// while-based function with Math.random()
console.log('   << while + Math.Random() >>');

function getValue() {
  const value = Math.random();

  if (value < 0.2) {
    return 0;
  }

  return value;
}

let x = getValue();

while (x > 0) {
  console.log(x);
  x = getValue();
}

console.log('--- Done ---');

// while-based function with Math.random() - enhanced with the endless loop
console.log('   << while + Math.Random() - enhanced >>');

function getValue() {
  const value = Math.random();

  if (value < 0.2) {
    return 0;
  }

  return value;
}

while (true) {
  let x = getValue();

  if (x === 0) {
    break;
  }

  console.log(x);
}

console.log('--- Done ---');
