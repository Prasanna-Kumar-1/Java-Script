// plain object methods

// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

// These methods are bit different to map.keys(), map.values(), map.entries();
// we need to pass user as parameter for these functions
// These methods return 'real' array objects, not just iterable

let user = {
  name: 'Prasanna',
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Result
// ["name", "age"]

// ["Prasanna", 30]

// (2) [Array(2), Array(2)]
// 0: (2) ["name", "Prasanna"]
// 1: (2) ["age", 30]
