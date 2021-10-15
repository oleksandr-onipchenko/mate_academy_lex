// for - the simplest loop example
console.log('   << FOR-1 - the simplest one >>');

for (let i = 0; i < 3; i++) {
  console.log(i);
  console.log('Ok!');
}

console.log('--- DONE-1 ---');

// for - the infinite loop breaking
console.log('   << FOR-2 - the infinite loop >>');

for (let i = 0; true; i++) {
  console.log(i);
  console.log('Ok!');

  if (i >= 3) {
    break;
  }
}

console.log('--- DONE-2 ---');

// for - continue
console.log('   << FOR-3 - the infinite loop >>');

debugger;

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
  console.log('Ok!');
}

console.log('--- DONE-3 ---');
