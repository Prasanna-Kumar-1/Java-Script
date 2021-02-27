// Arrow Function

// Regular function expression
const calcAge3 = function (birthYear) {
  return 2040 - birthYear;
};

// Arrow Function with one parameter and one line of code
const calcAge5 = (birthYear) => 2040 - birthYear;
//   Parameter => Function body --> there is no return

const age5 = calcAge5(1990);
console.log(age5);

// Arrow function with more lines code
const yearsUntilRetirement = (birthYear) => {
  const age = 2040 - birthYear;
  const retirement = 60 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1990));

// Better way

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2040 - birthYear;
  const retirement = 60 - age;
  // return retirement
  // Use template string to make meaningful sentenses
  return `${firstname} retires in ${retirement} years`;
};

// Now, call the functions using two parameters
console.log(yearsUntilRetirement(1990, "Prasanna"));
