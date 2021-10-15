// if

console.log('   << IF  >>');

const count = 3;

if (count === 1) {
  console.log('One');
} else if (count === 2) {
  console.log('Two');
} else {
  console.log('Many');
}

// switch case (with 'BREAK' for every case)

console.log('   << SWITCH 1  >>');

switch (count) {
  case 1:
    console.log('One');
    break;

  case 2:
    console.log('Two');
    break;

  default:
    console.log('Many');
    break;
}

// switch case (without 'BREAK' for every case)

console.log('   << SWITCH 2  >>');

switch (count) {
  case 1:
    console.log('One');
    break;

  case 2:
  case 3:
  case 4:
    console.log('A few');
    break;

  default:
    console.log('Many');
    break;
}

// a color display example

console.log('   << SWITCH 3  >>');

const primaryColor = 'orange'; // red, green or blue
let secondaryColor = getSecondaryColor(primaryColor);

function getSecondaryColor(primaryColor) {
  switch (primaryColor) {
    case 'red':
      return 'magenta';

    case 'green':
      return 'yellow';

    case 'blue':
      return 'cyan';

    default:
      return 'white';
  }
}

console.log(secondaryColor);

// a quantity display example

console.log('   << SWITCH 4 - 1a  >>');

const value = 8;

if (value === 5) {
  console.log('A few');
} else if (value === 10) {
  console.log('Many');
} else {
  console.log('Some');
}

console.log('   << SWITCH 4 - 1b  >>');

switch (value) {
  case 5:
    console.log('A few');
    break;

  case 5:
    console.log('Many');
    break;

  default:
    console.log('Some');
}

console.log('   << SWITCH 4 - 2a  >>');

if (value < 5) {
  console.log('A few');
} else if (value > 10) {
  console.log('Many');
} else {
  console.log('Some');
}

console.log('   << SWITCH 4 - 2b  >>');

switch (true) {
  case value < 5:
    console.log('A few');
    break;

  case value > 10:
    console.log('Many');
    break;

  default:
    console.log('Some');
}

// (value < 5)  ===  true; (value = 3)  ===  true;   =>  (value < 5)  ===  (value = 3).
