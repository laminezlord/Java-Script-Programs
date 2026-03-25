function addIntegers(a, b, c) {
if (a < 0 || b < 0 || c < 0){
  console.log("Input only positive numbers")
return a + b + c
}
 let sum = a + b + c;
 console.log(`The sum of ${a}, ${b}, and ${c} is: ${sum}.`);
}
addIntegers(7, 12, 18);
