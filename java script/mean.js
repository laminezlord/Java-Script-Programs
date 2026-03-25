//mean , median and mode
const prompt = require('prompt-sync')();
function mean(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
function median(array){
    array.sort((a, b) => a - b);

    let middle = Math.floo
function mode(array){
    let frequency = {};
    let maxFreq = 0;
    let modes = [];
    for(let i = 0; i < array.length; i++){
        let num = array[i];
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
        
    }
    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }
    return modes;
}
let input = prompt('Enter 10 numbers : ');
let numbers = input.split(',').map(Number);
console.log(`Mean: ${mean(numbers)}`);
console.log(`Median: ${median(numbers)}`);
console.log(`Mode: ${mode(numbers)}`);  
