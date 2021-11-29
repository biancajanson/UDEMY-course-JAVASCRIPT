'use strict';

// LECTURE: FUNCTIONS

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