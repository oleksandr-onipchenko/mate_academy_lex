function calculateProfit(amount, percent, period) {
  // write code here
  const investment = amount;
  let payout = investment;
  let years;

  for (years = 1; years <= period; years++) {
    payout += (payout * percent) / 100;
    console.log(`Year ${years} = payout of ${payout}`);
  }

  let profit = parseInt(payout - investment); // removing the floating part, leaving base only
  console.log(`Your profit after ${years - 1} years = ${profit}`);
  return profit;
}

calculateProfit(1000, 5.5, 7);
