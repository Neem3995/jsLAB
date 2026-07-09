//your task 
//create a program that tracks plant growth given a specific area

//establish variables 
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

//plant vars 
const minSpacePerPlant = 0.8;
const startingPlants = 20;

//week growth
let week = 3;


//plant weekly double growth 
let plantCount = startingPlants * (2 ** week); 

//area/ max cap of the garden 
let maxCapacity = area / minSpacePerPlant

//pseudocode! write out your process