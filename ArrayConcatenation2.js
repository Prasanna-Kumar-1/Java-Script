// Array Concat

// The method arr.concat creates a new array that includes values from other arrays and additional items.

// It accepts any number of arguments – either arrays or values.

// The result is a new array containing items from arr, then arg1, arg2 etc.

// If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

let arr = [1, 2];

// // create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
