const prompt = require('prompt-sync')();
let number = prompt('Enter a number: ');
console.log('Number\tSquare\tCube');
for (let i = 1; i <= number; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`);
}