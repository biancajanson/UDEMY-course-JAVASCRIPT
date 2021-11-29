// // CODING CHALLENGE 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightMark = 1.95

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const bmiMark = massMark / heightMark **2;
// const bmiJohn = massJohn / heightJohn**2;
// // console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// // console.log(markHigherBMI);

// // CODING CHALLENGE 2
// if (bmiMark > bmiJohn) {
//     ;
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// }   else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

// CODING CHALLENGE 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log((scoreDolphins1, scoreKoalas);

// if (scoreDolphins > scoreKoalas1) {
//     console.log("The Dolphins have won!")
// }   else if ((scoreKoalas > scoreDolphins) {
//     console.log("The Koalas have won!")
// }   else {
//     console.log("There is a draw, so no one have won...")
// }

// CODING CHALLENGE BONUS 1

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;


// console.log(scoreDolphins, scoreKoalas);

// if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
//     console.log("The Dolphins have won!")
// }   else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100)) {
//     console.log("The Koalas have won!")
// }   else {
//     console.log("There is a draw, so no one have won...")
// }

// CODING CHALLENGE BONUS 2

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
    console.log("The Dolphins have won!")
}   else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100)) {
    console.log("The Koalas have won!")
}   else  if ((scoreDolphins >= 100) && (scoreKoalas >= 100)) {
    console.log("There is a draw, so no one have won...")
}   else {
    console.log("The score is under 100, so there is no winner...")
}