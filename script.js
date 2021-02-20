// ==============================================================================================

//  Function Declaration
// function calcAge(birthYear) {
//     return 2040 - birthYear
// }

// const age1 = calcAge(1978)

// console.log(age1)

// Difference between function declartion vs function expression is that
// function declarion can be used before it is defined as shown below

// const age2 = calcAge(1978)

// function calcAge(birthYear) {
//     return 2040 - birthYear
// }

// console.log(age2)

// function expression
//  Here we write function keyword without a name. This is called Ananymus function
//

// const calcAge3 = function (birthYear) {
//     return 2040 - birthYear
// }

// const age3 = calcAge3(1978)

// console.log(age3)

// Function Expression cannot be accessed or used before it is defined as shown below

// const age4 = calcAge4(1978)

// const calcAge4 = function (birthYear) {
//     return 2040 - birthYear
// }

// console.log(age4)

// ==============================================================================================
//  Arrow Function

// Regular function expression
// const calcAge3 = function (birthYear) {
//     return 2040 - birthYear
// }

// Arrow Function with one parameter and one line of code
// const calcAge5 = birthYear => 2040 - birthYear
//               Parameter => Function body --> there is no return

// const age5 = calcAge5(1990)
// console.log(age5)

// // Arrow function with more lines code
// const yearsUntilRetirement = birthYear => {
//     const age = 2040 - birthYear;
//     const retirement = 60 - age;
//     return retirement
// }

// console.log(yearsUntilRetirement(1990))

// Better way

// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2040 - birthYear;
//     const retirement = 60 - age;
//     // return retirement
//     // Use template string to make meaningful sentenses
//     return `${firstname} retires in ${retirement} years`
// }

// // Now, call the functions using two parameters
// console.log(yearsUntilRetirement(1990, 'Prasanna'))
// ==============================================================================================
// Functions calling other functions
// const cutPieces = function (fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return juice;
// }
// console.log(fruitProcessor(5, 10))
// ==============================================================================================
// Array Concepts

// const ausCities = ['Brisband', 'Sydney', 'Melbourne']
// console.log(ausCities)

// const ausStates = new Array('NSW', 'VIC', 'SA')
// console.log(ausStates)

// // Accessing individual elements

// console.log(ausCities[1])
// console.log(ausStates[0])

// // Calculating length of the array

// console.log(ausCities.length)
// console.log(ausStates.length)

// //Mutation - Change

// ausCities[2] = 'Darwin'
// console.log(ausCities)

// ==============================================================================================
// Objects

// Array Declartion
// const prasannaArray = [
//     'Prasanna',
//     'Mallisetty',
//     20,
//     'Automation Tester',
//     ['Michael', 'Peter', 'Steven']
// ];

// Object : Key : Value pairs
// Object literal syntax - literally writng the object content
// const prasanna = {
//     firstName: 'Prasanna',
//     lastName: 'Mallisetty',
//     age: 20,
//     job: 'Automation Test Analyst',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(prasanna);

// Dot Notation(Dot Operator)

// console.log(prasanna.lastName);

// Bracket Notation

// console.log(prasanna['lastName']);

// Bracket Notation: we can use the expression within Brackets, where as we cannot do the same in dot notataion
// const nameKey = 'Name'
// console.log(prasanna['first' + nameKey])
// console.log(prasanna['last' + nameKey])

// const interestedIn = prompt('What do you want to know about Prasanna? Choose between firstName, lastName, age, job');
// console.log(interestedIn)
// console.log(prasanna[interestedIn])

// if (prasanna[interestedIn]) {
//     console.log(prasanna[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job')
// }

// Adding new properties

// prasanna.location = 'Sydney';
// prasanna['twitter'] = "@Prasanna";
// console.log(prasanna)

// ==============================================================================================
// Object Methods

// Object: Key: Value pairs
// Object literal syntax - literally writng the object content

// const prasanna = {
//     firstName: 'Prasanna',
//     lastName: 'Mallisetty',
//     birthYear: 2000,
//     job: 'Automation Test Analyst',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2040 - birthYear
//     // }

//     calcAge: function () {
//         console.log(this);
//         return 2040 - this.birthYear
//     }
// };

// // console.log(prasanna.calcAge(2000));
// // console.log(prasanna['calcAge'](2010));

// console.log(prasanna.calcAge());
// ==============================================================================================
// const prasanna = {
//     firstName: 'Prasanna',
//     lastName: 'Mallisetty',
//     birthYear: 2000,
//     job: 'Automation Test Analyst',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     calcAge: function () {
//         this.age = 2040 - this.birthYear
//         return this.age
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}
//         - years old ${this.job}, and he has ${this.
//                 hasDriverLicense ? 'a' : 'no'} driver's licence.`
//     }
// }

// console.log(prasanna.getSummary())
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
