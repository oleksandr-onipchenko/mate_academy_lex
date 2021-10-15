let cashInWallet = 50;
let age = 25;

const price = 40;
const ageLimit = 18;

const hasEnoughMoney = cashInWallet >= price;
const isAllowedAge = age >= ageLimit;

const canBuy = isAllowedAge && hasEnoughMoney;

console.log(canBuy);