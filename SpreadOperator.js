// Spread operator implementation

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

// Spread Operator to copy Array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

// Spread operator to copy Object

const prasannaObject1 = {
  myname1: "Prasanna",
  age1: 25,
  city1: "Sydney",
};

const copiedPrasanna1 = { ...prasannaObject1 };
console.log(copiedPrasanna1);

// Modifying or changing the object while copying

const prasannaObject2 = {
  myname2: "Prasanna",
  age2: 25,
  city2: "Sydney",
};

const copiedPrasanna2 = { ...prasannaObject2, age2: 30 };
console.log(copiedPrasanna2);

// Spread Operator with Arrow Function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator.
// If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);
// Result of the above operation is : [1, 2, 3, 4, 5]

const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5));
