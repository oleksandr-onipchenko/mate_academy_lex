function getDrinksWithStep(numberOfGuests, step) {
  let guests = 0;
  let newGuests = 0;
  let drinks = 0;
  let newDrinks = 0;
  let newOrder = 0;
  let order = 0;
  let time = 0;
  let totalOrder = 0;

  for (let i = 0; i <= numberOfGuests; i++) {
    if (i === 0) {
      console.log(`order = ${order}`);
      console.log(`guests = ${guests}`);
      console.log(`drinks = ${drinks}`);
      continue;
    }

    if (i === 1) {
      newOrder = i;
      order = newOrder;
      totalOrder = order;
      newGuests = i;
      guests += newGuests;
      newDrinks = 1;
      drinks = drinks + newDrinks;
      time = i + step;

      console.log(`order = ${order}`);
      console.log(`guests = ${guests}`);
      console.log(`drinks = ${drinks}`);
      continue;
    }

    if (i === time) {
      newOrder = i;
      order += step;
      totalOrder += order;
      newGuests = i;
      guests += newGuests;
      newDrinks = drinks + step;
      drinks = drinks + newDrinks;
      time = i + step;

      console.log(`order = ${order}`);
      console.log(`guests = ${guests}`);
      console.log(`drinks = ${drinks}`);
      continue;
    }
  }
  console.log(`Total drinks = ${drinks}`);
  console.log(`Total order = ${totalOrder}`);
  return totalOrder;
}

getDrinksWithStep(5, 3);
