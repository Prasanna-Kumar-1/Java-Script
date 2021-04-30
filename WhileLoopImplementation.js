// While loop 2

const prasannaArray = [
    'Prasanna',
    'Mallisetty',
    20,
    'Automation Tester',
    ['Michael', 'Peter', 'Steven']
];

console.log('----- WHILE LOOP -----')

// // Generating a random number using Math.random
let dice = Math.random() * 6
console.log(dice)

//  the above code still generates a decimal number.
//  To convert to Integer, use Math.trunc
let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

// while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log('Loop is about to end ...')

}
