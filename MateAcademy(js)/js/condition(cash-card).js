let cashInWallet = 30;
let cardAmount = 50;

const price = 40;

const hasEnoughCash = cashInWallet >= price;
const canPayWithCard = cardAmount >= price;

const canBuy = hasEnoughCash || canPayWithCard;

console.log(canBuy);