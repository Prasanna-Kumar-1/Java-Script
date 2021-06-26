// The Method Array.from that takes an iterable or array-like value and makes a “real” Array from it.

// The full syntax for Array.from also allows us to provide an optional “mapping” function:

let arrayLike = {
  0: 'Hello',
  1: 'Prasanna',
  length: 2,
};

let arr = Array.from(arrayLike);
console.log(arr);

// Syntax   :   Array.from(obj[, mapFn, thisArg])
//              The optional second argument mapFn can be a function that will be applied to each element before adding it to the array,
//              and thisArg allows us to set this for it.

let range = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

let array1 = Array.from(range);
console.log(array1);
