//============================================
//              Part 1
//============================================

//variable declarations
const n1 = 10;
const n2 = 20;
const n3 = 15;
const n4 = 5;

//checking the values for the numbers listed above = 50 
let isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`adds up to 50: ${isSum50}`) 

//checking if each number is unique
let isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`all numbers are unique ${isUnique}`) 

//checking if two numbers are odd 
let isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`at least two odd numbers ${isTwoOdd}`)

//checking if numbers are under 25
let isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`all numbers are under 25 ${isUnder25}`)

//Overall Validation 
let isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

//console output
console.log(`Are the numbers valid? ${isValid}`); 

//check if numbers are divisible by 5 
let allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`all numbers divisible by 5 ${allDivisibleBy5}`);

//check if first number is larger than last
let firstGreaterThanLast = n1 > n4 
console.log(`the first number is greater than the last ${firstGreaterThanLast}`) 

//testing the arithmetic chain 
let subtractionResult = n2 - n1;
let multiplicationResult = subtractionResult * n3;
let remainderResult = multiplicationResult % n4;
console.log(`arithmetic chain result: ${remainderResult}`)


//============================================
//              Part 2
//============================================

//constraints for the trip 
const distance = 1500
const fuelPrice = 3;
const budget = 175;

//speed constants
const speed55 = 55;
const speed60 = 60;
const speed75 = 75;

//miles per gallon constants
const mpg55 = 30;
const mpg60 = 28;
const mpg75 = 23;

//55 MPH Calcs 

//gallons for 55 mph
let gallons55 = distance / mpg55
console.log(`you need ${gallons55} gallons for 55 mph`)

//trip cost for 55 mph
let cost55 = speed55 * fuelPrice;
console.log(`it'll cost ${cost55} dollars for the trip at 55 mph`)

//total time at 55 mph 
let hours55 = distance / speed55
console.log(`it'll take you ${hours55} hours at 55 mph`)

//amount within budget
let withinBudget55 = cost55 <= budget;
console.log(`55 mph within budget is ${withinBudget55} for the trip`)

//60 MPH Calcs

//gallons for 60 mph
let gallons60 = distance / mpg60
console.log(`you need ${gallons60} gallons for 55 mph`)

//trip cost for 60 mph
let cost60 = speed60 * fuelPrice;
console.log(`it'l cost ${cost60} dollars for the trip at 60 mph`)

//total time at 60 mph '
let hours60 = distance / speed60 
console.log(`it'll take you ${hours60} hours at 60 mph`)

//amount within budget 
let withinBudget60 = cost60 <= budget;
console.log(`60 mph within budget is ${withinBudget60} for the trip`)

//75 MPH Calcs

//gallons for 75 mph
let gallons75 = distance / mpg75;
console.log(`you need ${gallons75} gallons for the 75 mph`)

//trip cost for 75 mph
let cost75 = speed75 * fuelPrice;
console.log(`it'll cost ${cost75} dollars for the trip at 60 mph`)

//total time at 75 mph
let hours75 = distance / speed75;
console.log(`it'll take you ${hours75} hours at 75 mph`)

//amount within budget
let withinBudget75 = cost75 <= budget;
console.log(`75 mph within budget is ${withinBudget75} for the trip`)
