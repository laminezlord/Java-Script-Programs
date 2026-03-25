const prompt = require("prompt-sync")();

let number = prompt("Enter a 4-digit number: ");

let d1 = Number(number[0]);
let d2 = Number(number[1]);
let d3 = Number(number[2]);
let d4 = Number(number[3]);

// add 7 and mod 10
d1 = (d1 + 7) % 10;
d2 = (d2 + 7) % 10;
d3 = (d3 + 7) % 10;
d4 = (d4 + 7) % 10;

// swap digits
let encrypted = "" + d3 + d4 + d1 + d2;

console.log("Encrypted number:", encrypted);