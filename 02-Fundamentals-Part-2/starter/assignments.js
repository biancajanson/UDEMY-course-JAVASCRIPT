'use strict';

// LECTURE: FUNCTIONS

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//     return description;
// }

// const netherlands = describeCountry("The Netherlands", 17, "Amsterdam");
// console.log(netherlands);

// const finland = describeCountry("Finland", 6, "Helsinki");
// console.log(finland);

// const ireland = describeCountry("Ireland", 5, "Dublin");
// console.log(ireland);

// LECTURE: FUNCTION DECLARATIONS VS. EXPRESSIONS

// DECLARATION
function percentageOfWorld1(population) {
    return (population/7900)*100;
}
const china1 = percentageOfWorld1(1441);
const netherlands1 = percentageOfWorld1(16);
const germany1 = percentageOfWorld1(83);
console.log(china1, netherlands1, germany1)

//EXPRESSION
const percentageOfWorld2 = function (population) {
    return (population/7900)*100;
}
const china2 = percentageOfWorld1(1441);
const netherlands2 = percentageOfWorld1(16);
const germany2 = percentageOfWorld1(83);
console.log(china2, netherlands2, germany2)
