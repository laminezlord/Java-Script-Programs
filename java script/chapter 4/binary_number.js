const prompt = require('prompt-sync')();
let binary = prompt('Enter a binary number: ');
let decimal = 0;
for (let i = 0; i < binary.length; i++) {
    let bit = parseInt(binary[binary.length - 1 - i]);
    decimal += bit * Math.pow(2, i);
}
console.log(`The decimal equivalent of ${binary} is ${decimal}.`);