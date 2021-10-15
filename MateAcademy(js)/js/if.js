//is age >18?
console.log('     << Test #1 >>');

const x = 18;

if (x > 5) {
  console.log(1);
  console.log(2);
  console.log(3);
}

console.log(x);

// is it a toddler?
console.log('     << Test #2 >>');

let age = 4;

if (age > 18) {
  console.log(`Age is >=18. It's ${age} - an adult.`);
} else if (age >= 7) {
  console.log(`Age is >=7! It's ${age} - a child!`);
} else if (age >= 3) {
  console.log(`Age is >=3! It's ${age} - a toddler!`); // karapuz
} else {
  console.log(`Age is <3! It's ${age} - a baby!`);
}

//my foot wear:
console.log('     << Test #3 >>');

const myShoeSize = 42;
const maxStoreShoeSize = 40;

if (myShoeSize <= maxStoreShoeSize) {
  console.log('We have shoes for you!');
} else {
  console.log('Check it out later!');
}

//hotel:
console.log('     << Test #4 >>');

const shortTermCost = 50;
const weekCost = 40;
const longTermCost = 30;

console.log(getRentalCost(2), getRentalCost(5), getRentalCost(10));

function getRentalCost(numberOfDays) {
  if (numberOfDays <= 3) {
    return numberOfDays * 50;
  } else {
    let daysLeft = numberOfDays - 3;

    if (daysLeft <= 4) {
      return shortTermCost * 3 + weekCost * daysLeft;
    } else {
      daysLeft = numberOfDays - 7;
      return shortTermCost * 3 + weekCost * 4 + longTermCost * daysLeft;
    }
  }
}

//a simplified version of the previous code - we got rid of one enclosure level:
/* function getRentalCost(numberOfDays) {
  if (numberOfDays <= 3) {
    return numberOfDays * 50;
  }

  let daysLeft = numberOfDays - 3;

  if (daysLeft <= 4) {
    return shortTermCost * 3 + weekCost * daysLeft;
  }

  daysLeft = numberOfDays - 7;
  return shortTermCost * 3 + weekCost * 4 + longTermCost * daysLeft;
} */

/* function getRentalCost1(numberOfDays) {
  if (numberOfDays <= 3) {
    return `The cost for ${numberOfDays} days = $ ${numberOfDays * shortTermCost}.`;
  } else {
    let daysLeft = numberOfDays - 3;

    if (daysLeft <= 4) {
      return `The cost for ${numberOfDays} days = $ ${shortTermCost * 3 + weekCost * daysLeft}.`;
    } else {
      daysLeft = numberOfDays - 7;
      return `The cost for ${numberOfDays} days = $ ${
        shortTermCost * 3 + weekCost * 4 + daysLeft * longTermCost
      }.`;
    }
  }
}

console.log(getRentalCost1(2), getRentalCost1(5), getRentalCost1(10)); */

//TEST:
/* function getRentalCost2(numberOfDays) {
  if (numberOfDays > 0) {
    return `The cost for ${numberOfDays} days = $ ${numberOfDays * shortTermCost}.`;
  } else {
    return '<< !!! FOR FREE !!! >>';
  }
}

console.log(getRentalCost2(10)); */

//not recommended (if there is only one condition for IF):
console.log('     --- Comment #1 ---');
console.log('not recommended');
let amount = 5000;
if (amount > 10000) console.log('Too much...');
else console.log('Good price!');
