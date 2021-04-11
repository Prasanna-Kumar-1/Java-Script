//  Function Declaration

function calcAge(birthYear) {
  return 2040 - birthYear;
}

const age1 = calcAge(1978);

console.log(age1);

// Difference between function declartion vs function expression is that
// function declarion can be used before it is defined as shown below

const age2 = calcAge(1978);

function calcAge(birthYear) {
  return 2040 - birthYear;
}

console.log(age2);

// function expression
// Here we write function keyword without a name. This is called Ananymus function

const calcAge3 = function (birthYear) {
  return 2040 - birthYear;
};

const age3 = calcAge3(1978);

console.log(age3);

// Function Expression cannot be accessed or used before it is defined as shown below

const age4 = calcAge4(1978);

const calcAge4 = function (birthYear) {
  return 2040 - birthYear;
};

console.log(age4);
