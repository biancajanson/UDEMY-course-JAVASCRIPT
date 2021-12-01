'use strict';

// LECTURE: FUNCTIONS
/*
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return description;
}

const netherlands = describeCountry("The Netherlands", 17, "Amsterdam");
console.log(netherlands);

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

const ireland = describeCountry("Ireland", 5, "Dublin");
console.log(ireland);
*/
// LECTURE: FUNCTION DECLARATIONS VS. EXPRESSIONS

// DECLARATION
// function percentageOfWorld1(population) {
//     return (population/7900)*100;
// }
/*
const china1 = percentageOfWorld1(1441);
const netherlands1 = percentageOfWorld1(17);
const germany1 = percentageOfWorld1(83);
console.log(china1, netherlands1, germany1);

//EXPRESSION
const percentageOfWorld2 = function (population) {
    return (population/7900)*100;
}
const china2 = percentageOfWorld1(1441);
const netherlands2 = percentageOfWorld1(17);
const germany2 = percentageOfWorld1(83);
console.log(china2, netherlands2, germany2);

// LECTURE: ARROW FUNCTIONS

const percentageOfWorld3 = population => (population/7900)*100;
const china3 = percentageOfWorld1(1441);
const netherlands3 = percentageOfWorld1(17);
const germany3 = percentageOfWorld1(83);
console.log(china3, netherlands3, germany3);
*/
// LECTURE: FUNCTIONS CALLING OTHER FUNCTIONS

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`
//     console.log(description);
// }

// describePopulation('China',1441);
// describePopulation('Netherlands', 17);
// describePopulation('Germany', 83)

// LECTURE: INTRODUCTION TO ARRAYS

// OEFENING IN VIDEO
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends)

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends.length - 1);

// OPDRACHT
function percentageOfWorld1(populations) {
    return (populations/7900)*100;
}
const populations = [1441, 17, 83, 10] // China, Nederland, Duitsland, Portugal
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];
console.log(percentages);

// BASIC ARRAY OPERATIONS