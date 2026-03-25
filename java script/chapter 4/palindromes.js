const prompt = require('prompt-sync')();
let number = prompt('Enter a number: ');
let reversed = number.split('').reverse().join('');
if (number === reversed) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}