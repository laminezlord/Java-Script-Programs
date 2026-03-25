const prompt = require('prompt-sync')();
let income = prompt('Enter your annual income: ');
let tax_rate;
if (income <= 9875) {
    tax_rate = 0.1;
} else if (income <= 40125) {
    tax_rate = 0.12;
} else if (income <= 85525) {
    tax_rate = 0.22;
} else if (income <= 163300) {
    tax_rate = 0.24;
} else if (income <= 207350) {
    tax_rate = 0.32;
} else if (income <= 518400) {
    tax_rate = 0.35;
} else {
    tax_rate = 0.37;
}
let tax = income * tax_rate;
console.log(`Your annual tax is $${tax.toFixed(2)}.`);