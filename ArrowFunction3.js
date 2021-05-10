// Arrow Function

// Example 1
let sum1 = (a, b) => a + b;
console.log(sum1(100, 100));

// (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result

// Example 2
const sumAllNums = (...args) => {
  let sum = 0;
  for (const ele of args) {
    sum += ele;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4));

// Example 3

const countriesUppercase = (arr) => {
  const cuArray = [];
  for (const element of arr) {
    cuArray.push(element.toUpperCase());
  }
  return cuArray;
};

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
console.log(countriesUppercase(countries));
