// LECTURE: VALUES AND VARIABLES

// let country = "The Netherlands"
// let continent = "Europe"

// let population = 17


// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: DATA TYPES

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// LECTURE: LET, CONST AND VAR

// language = "Dutch";
// const country = "The Netherlands";
// const continent = "Europe"
// const isIsland = false;
// isIsland = true;

// LECTURE: BASIC OPERATORS

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description); 

// const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(descriptionNew);

// LECTURE: TYPE CONVERSION AND COERCION

// console.log('9'- '5'); // voorspelling: 4
// console.log('19' - '13' + '17') // voorspelling: 617
// console.log('19' - '13' + 17) // voorspelling: 23
// console.log('123' < 57); // voorspelling: false
// console.log(5 + 6 + '4' + 9 - 4 - 2) // voorspelling: 1143

// LECTURE: EQUALITY OPERATORS: == VS. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// }   else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// }   else {
//     console.log('No borders')
// }

// LECTURE: LOGICAL OPERATORS

// const speaksEnglish = true;
// const lessThan50Million = true;
// const isIsland = false;

// if (speaksEnglish && lessThan50Million && !isIsland) {
//     console.log("You should live in The Netherlands")
// }   else {
//     console.log("The Netherlands does not meet your criteria :(")
// }

// LECTURE: THE SWITCH STATEMENT, OPDRACHT IN VIDEO

// const day='sunday';

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!')
// }

// LECTURE: THE SWITCH STATEMENT

// const language = 'dutch'

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers')
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers')
//         break;
//     case 'english':
//         console.log('3rd place')
//         break;
//     case 'hindi':
//         console.log('Number 4')
//         break;
//     case 'arabic':
//         console.log('5th most spoken language')
//         break;
//     default:
//         console.log('Great language too :D') 
// }

// LECTURE: THE CONDITIONAL (TERNARY) OPERATOR

const population = 17
const averagePopulation = population > 33 ? 'above' : 'below';
console.log(averagePopulation)
console.log(`The Netherlands population is ${population > 33 ? 'above' : 'below'} average.`);
