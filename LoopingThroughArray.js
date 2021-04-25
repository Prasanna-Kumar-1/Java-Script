//  looping concepts - for loop - looping through the Arrays

const prasannaArray = [
    'Prasanna',
    'Mallisetty',
    20,
    'Automation Tester',
    ['Michael', 'Peter', 'Steven']
];

// hard coded length of the array
for (let i = 0; i <= 5; i++) {
    console.log(prasannaArray[i])
}

// Using the length function
for (let i = 0; i <= prasannaArray.length; i++) {
    console.log(prasannaArray[i], typeof prasannaArray[i]);
}

// empty array
const types = []
for (let i = 0; i <= prasannaArray.length; i++) {
    console.log(prasannaArray[i], typeof prasannaArray[i]);

    types[i] = typeof [i]
}

console.log(types)