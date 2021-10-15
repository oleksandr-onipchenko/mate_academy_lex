// I have $10
let amount = 18;

// Cookies cost $7
let cookiePrice = 7;

// Candies cost $8
let candyPrice = 8;

// What is left after I purchase cookies:
amount = amount - cookiePrice;

// Can I purchcacse cookies and candies?
if (amount >= candyPrice) {
    document.write('I have enough money!')
}
else {
    document.write('I do not have enough money...')
}