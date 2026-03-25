let max = Number.MIN_VALUE;

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Enter number:"));

    if (num > max) {
        max = num;
    }
}

console.log("Maximum number is: " + max);