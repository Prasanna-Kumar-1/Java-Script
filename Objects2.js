// Objects

// Array Declartion
const prasannaArray = [
  'Prasanna',
  'Mallisetty',
  20,
  'Automation Tester',
  ['Michael', 'Peter', 'Steven'],
];

// Object : Key : Value pairs
// Object literal syntax - literally writng the object content
const prasanna = {
  firstName: 'Prasanna',
  lastName: 'Mallisetty',
  age: 20,
  job: 'Automation Test Analyst',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(prasanna);

// Dot Notation(Dot Operator)

console.log(prasanna.lastName);

// Bracket Notation

console.log(prasanna['lastName']);

// Bracket Notation: we can use the expression within Brackets, where as we cannot do the same in dot notataion
const nameKey = 'Name';
console.log(prasanna['first' + nameKey]);
console.log(prasanna['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Prasanna? Choose between firstName, lastName, age, job'
);
console.log(interestedIn);
console.log(prasanna[interestedIn]);

if (prasanna[interestedIn]) {
  console.log(prasanna[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job');
}

// Adding new properties

prasanna.location = 'Sydney';
prasanna['twitter'] = '@Prasanna';
console.log(prasanna);
