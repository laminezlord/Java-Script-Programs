let population = 8100000000; // current world population
let growthRate = 0.009; // 0.9%

let initialPopulation = population;
let doubleYear = 0;

console.log("Year\tPopulation\t\tIncrease");

for (let year = 1; year <= 75; year++) {

    let increase = population * growthRate;
    population = population + increase;

    console.log(year + "\t" + Math.floor(population) + "\t" + Math.floor(increase));

    if (population >= initialPopulation * 2 && doubleYear === 0) {
        doubleYear = year;
    }
}

console.log("\nPopulation will double in about year:", doubleYear);