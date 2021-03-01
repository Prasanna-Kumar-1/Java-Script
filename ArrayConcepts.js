// Array Concepts

const ausCities = ["Brisband", "Sydney", "Melbourne"];
console.log(ausCities);

const ausStates = new Array("NSW", "VIC", "SA");
console.log(ausStates);

// Accessing individual elements

console.log(ausCities[1]);
console.log(ausStates[0]);

// Calculating length of the array

console.log(ausCities.length);
console.log(ausStates.length);

//Mutation - Change

ausCities[2] = "Darwin";
console.log(ausCities);
