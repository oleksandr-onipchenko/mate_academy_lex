function getYears(amount, percent, limit) {
  // write code here

  let years = 0;

  do {
    console.log(`Amount before = ${amount}`);
    amount += (amount * percent) / 100;
    console.log(`Amount after = ${amount}`);

    if (amount <= limit) {
      years++;
      console.log(`Years = ${years}`);
    }
  } while (amount <= limit);

  return years;
}

getYears(1600, 10, 2000);
