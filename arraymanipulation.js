// Array Manipulations

// Array Constructor
//Array:To create an array.

const myArray = Array() // creates an an empty array
console.log(myArray)

const fiveEmptyValues = Array(5) // it creates five empty values
console.log(fiveEmptyValues) // [empty x 5]

//Creating static values with fill
//fill: Fill all the array elements with a static value

const fivePrasannas = Array(5).fill('Prasanna')
console.log(fivePrasannas)

const fiveZeros = Array(5).fill(0)
console.log(fiveZeros)