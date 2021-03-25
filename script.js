// ==============================================================================================

// ==============================================================================================

// ==============================================================================================
//  looping concepts - for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`lifting weights repetition ${i}`);
// }

// ==============================================================================================
//  looping concepts - for loop - looping through the Arrays

// const prasannaArray = [
//     'Prasanna',
//     'Mallisetty',
//     20,
//     'Automation Tester',
//     ['Michael', 'Peter', 'Steven']
// ];

// hard coded length of the array
// for (let i = 0; i <= 5; i++) {
//     console.log(prasannaArray[i])
// }

// Using the length function
// for (let i = 0; i <= prasannaArray.length; i++) {
//     console.log(prasannaArray[i], typeof prasannaArray[i]);
// }

// empty array
// const types = []
// for (let i = 0; i <= prasannaArray.length; i++) {
//     console.log(prasannaArray[i], typeof prasannaArray[i]);

//     types[i] = typeof [i]
// }

// console.log(types)

// ==============================================================================================
// continue and break

// const prasannaArray = [
//     'Prasanna',
//     'Mallisetty',
//     20,
//     'Automation Tester',
//     ['Michael', 'Peter', 'Steven']
// ];

// // Using the length function
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i <= prasannaArray.length; i++) {
//     if (typeof prasannaArray[i] !== 'string') continue;
//     console.log(prasannaArray[i], typeof prasannaArray[i]);
// }

// console.log('--- BREAK IF IT IS A NUMBER ---')
// for (let i = 0; i <= prasannaArray.length; i++) {
//     if (typeof prasannaArray[i] === 'string') continue;
//     console.log(prasannaArray[i], typeof prasannaArray[i]);
// }

// ==============================================================================================
// Array looping back wards

// const prasannaArray = [
//     'Prasanna',
//     'Mallisetty',
//     20,
//     'Automation Tester',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = prasannaArray.length - 1; i >= 0; i--) {
//     console.log(prasannaArray[i])
// }

// ==============================================================================================
// loops inside loops

// Array looping back wards

// const prasannaArray = [
//     'Prasanna',
//     'Mallisetty',
//     20,
//     'Automation Tester',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------------ starting exercise' ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Liting weight repetition ${rep} :-)`)
//     }
// }
// ==============================================================================================
// while loop

// const prasannaArray = [
//     'Prasanna',
//     'Mallisetty',
//     20,
//     'Automation Tester',
//     ['Michael', 'Peter', 'Steven']
// ];

// console.log('----- WHILE LOOP -----')

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Liting weight repetition ${rep} :-)`);
//     rep++;
// }

// ==============================================================================================
// While loop 2

const prasannaArray = [
  "Prasanna",
  "Mallisetty",
  20,
  "Automation Tester",
  ["Michael", "Peter", "Steven"],
];

console.log("----- WHILE LOOP -----");

// Generating a random number using Math.random
// let dice = Math.random() * 6
// console.log(dice)

//  the above code still generates a decimal number.
//  To convert to Integer, use Math.trunc
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end ...");
}
