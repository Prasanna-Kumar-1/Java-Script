// Removing duplicates from an array which is containing number, strings and booleans
const array = [1, 2, 3, 2, 1, true, true, false, "Prasanna", 1, 5, "Prasanna"];

const filtered__array = [new Set(array)];
console.log(filtered__array);
