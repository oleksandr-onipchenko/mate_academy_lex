function buildHouse(numberOfFloors, color) {
  const house = `We've got to build a ${color} ${numberOfFloors}-floor house.`;
  return house;
}

const smallHouse = buildHouse(2, 'red');
const bigHouse = buildHouse(9, 'white');

console.log(smallHouse);
console.log(bigHouse);