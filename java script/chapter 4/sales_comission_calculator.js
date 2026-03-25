const prompt = require('prompt-sync')();

let sales_amount = prompt('Enter the total sales amount: ');
let commission_rate = 0.1;
let commission = sales_amount * commission_rate;
console.log(`Your sales commission is $${commission.toFixed(2)}.`);
