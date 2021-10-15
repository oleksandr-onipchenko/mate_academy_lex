// !! = double logicat rejection - to convert a value (number) to the boolean data type.

let condition = 12; // 12 = true
let space = ' '; // space = true
condition {} = true; // empty object = true
condition[] = true; // empty array = true
condition = function () { }; // empty function = true

// Alt+Shift+F - code format correction.

false === false;
0 === false;
NaN === false;
0n === false; // 0n = Big Int
'' === false; // empty brackets = false;
null === false;
undefined === false;


console.log(Boolean(condition), !!condition);

if (condition) {
  console.log('Hello');
  console.log('world!');
}


// How boolean OR behaves:
console.log(
  true || true,  // true
  true || false,  // true
  false || true,  // true
  false || false,  // false
);
  
function or(a, b) {
  return a || b;
}

function or2(a, b) {
  if (a) {
    return a;
  } else {
    return b;
  }
}

console.log(
  or(true, true);
  or(true, true);
  or(true, true);
  or(true, true);
);

// OR - the first value is etrned only if it is true. Otherwise, the second value is returned.  0 || 1 || 2 || 3  =>  0||1 (1=true) => 1||2 (1=the first true value among those compared). 1||3 = 1||2.
// AND - the first value is etrned only if it is false. Otherwise, the second value is returned. 0 && 1 && 2 && 3  =>  0||1 (0=false) => 0||2 (0=the first value among those compared is false). 0||3 = 0||2.
//OR+AND - 1 || 2 && 3 || 4  =>  1 || (2 && 3) || 4  =>  1 || 3 || 4  =>  1 || 4  => 1