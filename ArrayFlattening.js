array = [1, 2, [3, 4], [[5], 6]];

// Calling flat on an array with infinity leads to the array being flatened until there is only one layer left
console.log(array.flat(Infinity));

console.log("Using the flat method below:");
const result = Array.prototype.flat([1, 2, [3, 4], [[5], 6]]);
console.log(result);
