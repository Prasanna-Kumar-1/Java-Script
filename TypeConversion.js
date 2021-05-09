// ==============================================================================================
// Type Conversion1

// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value);

// ==============================================================================================
// Type Conversion2
// Numeric Conversion : We can use the Number(value) function to explicitly convert a value to a number:

// Numeric conversion rules:

// Value	        Becomes…
// undefined	     NaN
// null	              0
// true and false	1 and 0
// string	          Whitespaces from the start and end are removed.
//                    If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

let str = '123';
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

// If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number('an arbitrary string instead of a number');

console.log(age); // NaN, conversion failed

console.log(Number('   123   ')); // 123
console.log(Number('123z')); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0
