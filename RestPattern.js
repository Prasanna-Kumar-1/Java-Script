// Rest Pattern and Parameters

// Spread Operator : Unpacks the elements from the Array
// Rest Pattern    : Packs the elements to form Array

// SPREAD Operator : RIGHT Side of =
// const arr = [1, 2, ...[3, 4, 5]];

// REST : LEFT Side of =

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest);

// rest will be an array [3,4,5]

// IMP: REST Element should be the last element

// For example, below is SYNTAX error

// const [c, d, ...rest2, e] = [1, 2, 3, 4, 5, 6];

// REST Pattern with Objects

const me = {
  CityLiveIn: 'Sydney',
  name: 'Prasanna',
  age: 30,
};

const { CityLiveIn, ...myDetails } = me;
console.log(CityLiveIn);
console.log(myDetails);

// myDetails will be {name: "Prasanna", age: 30}

const x = [1, 2, 3];
