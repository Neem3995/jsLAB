//============================================
//              Part 1
//============================================

//your task
//create a program that tracks plant growth given a specific area

//establish variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

//plant vars
const minSpacePerPlant = 0.8;
const startingPlants = 20;

//area / max cap of the garden
let maxCapacity = area / minSpacePerPlant;

console.log(`Garden area is ${area} square meters`);
console.log(`Maximum plant capacity is ${maxCapacity} plants`);

//week 1 growth
let week1 = 1;
let week1PlantCount = startingPlants * (2 ** week1);
let week1Percentage = week1PlantCount / maxCapacity;

console.log(`Week 1 plant count is ${week1PlantCount}`);

if (week1Percentage > 0.8) {
    console.log("Week 1 recommendation: Prune the plants.");
} else if (week1Percentage >= 0.5 && week1Percentage <= 0.8) {
    console.log("Week 1 recommendation: Monitor the plants.");
} else {
    console.log("Week 1 recommendation: Plant more plants.");
}

//week 2 growth
let week2 = 2;
let week2PlantCount = startingPlants * (2 ** week2);
let week2Percentage = week2PlantCount / maxCapacity;

console.log(`Week 2 plant count is ${week2PlantCount}`);

if (week2Percentage > 0.8) {
    console.log("Week 2 recommendation: Prune the plants.");
} else if (week2Percentage >= 0.5 && week2Percentage <= 0.8) {
    console.log("Week 2 recommendation: Monitor the plants.");
} else {
    console.log("Week 2 recommendation: Plant more plants.");
}

//week 3 growth
let week3 = 3;
let week3PlantCount = startingPlants * (2 ** week3);
let week3Percentage = week3PlantCount / maxCapacity;

console.log(`Week 3 plant count is ${week3PlantCount}`);

if (week3Percentage > 0.8) {
    console.log("Week 3 recommendation: Prune the plants.");
} else if (week3Percentage >= 0.5 && week3Percentage <= 0.8) {
    console.log("Week 3 recommendation: Monitor the plants.");
} else {
    console.log("Week 3 recommendation: Plant more plants.");
}


//============================================
//              Part 2
//============================================

//thinking bigger variables
const biggerStartingPlants = 100;
const biggerWeeks = 10;

//calculate plant growth after 10 weeks
let biggerPlantCount = biggerStartingPlants * (2 ** biggerWeeks);
console.log(`After 10 weeks, there would be ${biggerPlantCount} plants`);

//calculate required area
let requiredArea = biggerPlantCount * minSpacePerPlant;
console.log(`Required area for the plants is ${requiredArea} square meters`);

//calculate additional area needed
let additionalArea = requiredArea - area;
console.log(`Additional area needed is ${additionalArea} square meters`);

//calculate new radius
let newRadius = Math.sqrt(requiredArea / PI);
console.log(`The new radius would need to be ${newRadius} meters`);


//============================================
//              Part 3
//============================================

//errors in judgment
try {
    const errorStartingPlants = 100;

    //calculate space needed for 100 plants
    let spaceNeeded = errorStartingPlants * minSpacePerPlant;
    console.log(`Space needed for 100 plants is ${spaceNeeded} square meters`);

    //check if space needed is greater than available space
    if (spaceNeeded > area) {
        throw new Error("The garden does not have enough space for 100 plants.");
    } else {
        console.log("The garden has enough space for 100 plants.");
    }

} catch (error) {
    console.log(`Error: ${error.message}`);
}