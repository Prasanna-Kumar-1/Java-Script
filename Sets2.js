// =========================================================================================================================
// Set

// A Set is a set of values where each value may occur only once

// new Set(iterable)    :   creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value)       :   adds a value, returns the set itself.
// set.delete(value)    :   removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value)       :   returns true if the value exists in the set, otherwise false.
// set.clear()          :   removes everything from the set.
// set.size             :   is the elements count.

let set = new Set();

let prasanna = { name: 'Prasanna' };
let jayanthi = { name: 'Jayanthi' };
let yash = { name: 'Yash' };

// visits, some users come multiple times
set.add(prasanna);
set.add(jayanthi);
set.add(yash);
set.add(prasanna);
set.add(jayanthi);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// Iteration over set
let set1 = new Set(['oranges', 'apples', 'bananas']);
console.log(set1);

// Iteration using for..of
for (let fruits of set1) {
  console.log(fruits);
}

// Iteration using forEach

set1.forEach((value, set) => {
  console.log(value);
});

// Creating an empty set
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);
