const prompt = require('prompt-sync')();

let miles = prompt('Enter the number of miles driven: ');
let gallons = prompt('Enter the number of gallons of gas used: ');

let average = miles / gallons;
let total_miles_per_gallon = miles * gallons;
console.log(`Your car's fuel efficiency is ${average.toFixed(2)} miles per gallon.`);
console.log(`The total distance traveled is ${total_miles_per_gallon.toFixed(2)} miles.`);

