// //gas milleage calculator
// const prompt = require('prompt-sync')();

// let miles = prompt('Enter the number of miles driven: ');
// let gallons = prompt('Enter the number of gallons of gas used: ');

// let average = miles / gallons;
// let total_miles_per_gallon = miles * gallons;
// console.log(`Your car's fuel efficiency is ${average.toFixed(2)} miles per gallon.`);
// console.log(`The total distance traveled is ${total_miles_per_gallon.toFixed(2)} miles.`);


//Credit limit calculator

// const prompt = require('prompt-sync')();

// let credit_limit = prompt('Enter your credit limit: ');
// let balance = prompt('Enter your current balance: ');
// if (balance > credit_limit) {
//     console.log('Credit limit exceeded.');
// }       
// else {
//     console.log('Credit limit not exceeded.');
// }

// sales commission calculator

// const prompt = require('prompt-sync')();

// let sales_amount = prompt('Enter the total sales amount: ');
// let commission_rate = 0.1;
// let commission = sales_amount * commission_rate;
// console.log(`Your sales commission is $${commission.toFixed(2)}.`);

// TAX CALCULATOR
// const prompt = require('prompt-sync')();
// let income = prompt('Enter your annual income: ');
// let tax_rate;
// if (income <= 9875) {
//     tax_rate = 0.1;
// } else if (income <= 40125) {
//     tax_rate = 0.12;
// } else if (income <= 85525) {
//     tax_rate = 0.22;
// } else if (income <= 163300) {
//     tax_rate = 0.24;
// } else if (income <= 207350) {
//     tax_rate = 0.32;
// } else if (income <= 518400) {
//     tax_rate = 0.35;
// } else {
//     tax_rate = 0.37;
// }
// let tax = income * tax_rate;
// console.log(`Your annual tax is $${tax.toFixed(2)}.`);

//tabular output
// const prompt = require('prompt-sync')();
// let number = prompt('Enter a number: ');
// console.log('Number\tSquare\tCube');
// for (let i = 1; i <= number; i++) {
//     console.log(`${i}\t${i**2}\t${i**3}`);
// }

// right angle number pattern
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j ;
//     }    console.log(row);
// }

//palindromes

// const prompt = require('prompt-sync')();
// let number = prompt('Enter a number: ');
// let reversed = number.split('').reverse().join('');
// if (number === reversed) {
//     console.log(`${number} is a palindrome.`);
// } else {
//     console.log(`${number} is not a palindrome.`);
// }

// printing the decimal equivalent of a binary number

// const prompt = require('prompt-sync')();
// let binary = prompt('Enter a binary number: ');
// let decimal = 0;
// for (let i = 0; i < binary.length; i++) {
//     let bit = parseInt(binary[binary.length - 1 - i]);
//     decimal += bit * Math.pow(2, i);
// }
// console.log(`The decimal equivalent of ${binary} is ${decimal}.`);

//factorial
// const prompt = require('prompt-sync')();
// let number = prompt('Enter a number: ');
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log(`The factorial of ${number} is ${factorial}.`);

//enforcing privacy with cryptography

// const crypto = require('crypto');
// const prompt = require('prompt-sync')();

// let password = prompt('Enter a password: ');
// let hash = crypto.createHash('sha256').
// update(password).digest('hex');
// console.log(`Your password hash is: ${hash}.`);

// let input_password = prompt('Re-enter your password for verification: ');
// let input_hash = crypto.createHash('sha256').update(input_password).digest('hex');
// if (input_hash === hash) {
//     console.log('Password verified successfully.');
// } else {
//     console.log('Password verification failed.');
// }

// create a  function that takes  3  integer and prints the addition of the 3 integers ad wont take negative integers as input

function addThreeIntegers(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        console.log('Please enter only positive integers.');
        return;
    }
    let sum = a + b + c;
    console.log(`The sum of ${a}, ${b}, and ${c} is: ${sum}.`);

}
addThreeIntegers(10, 5, 12);


