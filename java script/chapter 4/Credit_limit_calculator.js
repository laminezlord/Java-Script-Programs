const prompt = require('prompt-sync')();

let credit_limit = prompt('Enter your credit limit: ');
let balance = prompt('Enter your current balance: ');
if (balance > credit_limit) {
    console.log('Credit limit exceeded.');
}       
else {
    console.log('Credit limit not exceeded.');
}
