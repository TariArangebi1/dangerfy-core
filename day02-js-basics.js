// Functions
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));

function isPositive(number) {
    return number > 0;
}
console.log(isPositive(0));

// Arrow functions
const isEven2 = (number) => {
    return number % 2 === 0;
};
console.log(isEven2(4));

const isPositive2 = (number) => {
    return number > 0;
};
console.log(isPositive2(-1));

// Default parameters
const addTax = (price, taxRate = 0.2) => {
    return price + price * taxRate;
};
console.log(addTax(100));
console.log(addTax(100, 0.05));

const greet = (name = "friend") => {
    return `Hello ${name}!`;
};
console.log(greet("Tari"));
console.log(greet());

// Functions as arguments
const applyDiscount = (price, discountFn) => {
    return discountFn(price);
};

const halfOff = (price) => price / 2;
const tenPercentOff = (price) => price * 0.9;

console.log(applyDiscount(100, halfOff));
console.log(applyDiscount(200, tenPercentOff));