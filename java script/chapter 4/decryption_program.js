const prompt = require("prompt-sync")();

let number = prompt("Enter encrypted 4-digit number: ");

let d1 = Number(number[0]);
let d2 = Number(number[1]);
let d3 = Number(number[2]);
let d4 = Number(number[3]);

// swap back
let t1 = d3;
let t2 = d4;
let t3 = d1;
let t4 = d2;

// reverse +7 rule
t1 = (t1 + 10 - 7) % 10;
t2 = (t2 + 10 - 7) % 10;
t3 = (t3 + 10 - 7) % 10;
t4 = (t4 + 10 - 7) % 10;

let decrypted = "" + t1 + t2 + t3 + t4;

console.log("Decrypted number:", decrypted);