// .map(), .reduce(), and .filter()

// ========================================================================================================================
// .map() Implementation

var officers = [
  { id: 1, name: 'Prasanna1' },
  { id: 2, name: 'Prasanna2' },
  { id: 3, name: 'Prasanna3' },
  { id: 4, name: 'Prasanna4' },
];

// We just need to extract only ids

// This can be achieved using forEach()

let officerIds = [];

officers.forEach(function (officers) {
  officerIds.push(officers.id);
});

console.log(officerIds);

// This can be achieved using .map() as below

let officerIds2 = officers.map(function (officers) {
  return officers.id;
});

console.log(officerIds2);

// using .map() and arrow functions

const officerId3 = officers.map((officers) => officers.id);
console.log(officerId3);

// .map() basically takes 2 arguments, a callback and an optional context.
// The callback runs for each value in the array and returns each new value in the resulting array

// ========================================================================================================================
// .reduce() Implementation

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

// Arguments:

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

// NOTE :
// (1) The function is applied to all array elements one after another and “carries on” its result to the next call.
// (2) As function is applied, the result of the previous function call is passed to the next one as the first argument.
// (3) So, the first argument is essentially the accumulator that stores the combined result of all previous executions.
//     And at the end it becomes the result of reduce.

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

// ========================================================================================================================
// .filter() Implementation

var ausCitizens = [
  {
    id: 1,
    name: 'Prasanna1',
    faction: 'Sydney Sider',
  },
  {
    id: 2,
    name: 'Prasanna2',
    faction: 'Tasmanian',
  },
  {
    id: 3,
    name: 'Prasanna3',
    faction: 'Sydney Sider',
  },
  {
    id: 4,
    name: 'Prasanna4',
    faction: 'Tasmanian',
  },
];

let sydneyAussies = ausCitizens.filter(function (ausCitizens) {
  return ausCitizens.faction === 'Sydney Sider';
});

console.log(sydneyAussies);

// Writing with arrow functions

let tasAussies = ausCitizens.filter(
  (ausCitizens) => ausCitizens.faction === 'Tasmanian'
);

console.log(tasAussies);
