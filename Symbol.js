// Symbol Type

// Object Property Keys can be of
//                               (1) String Type
//                               (2) Symbtol Type

// NOTE: Object property keys cannot be of (1) Numbers (2) Booleans

// (1) Symbols are often used to identify object properties.

// (2) They are used to avoid name clashing between properties, since no symbol is equal to another.

// (3) to add properties that the user cannot overwrite, intentionally or without realizing.

// (4) Symbols are not enumerated, which means that they do not get included in a for..of or for..in loop ran upon an object.

// (5) Symbols are not part of the Object.keys() or Object.getOwnPropertyNames() result.

console.log(Symbol());
console.log(Symbol('Some Test'));

const NAME = Symbol();
const person = {
  [NAME]: 'Prasanna',
};

console.log(person[NAME]); //'Prasanna'

const RUN = Symbol();
person[RUN] = () => 'Person is running';
console.log(person[RUN]()); //'Person is running'

// // Symbolic properties do not participate in for..in loop.

let id = Symbol('id');
let user = {
  name: 'Prasanna',
  age: 30,
  [id]: 123,
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log('Direct: ' + user[id]);
