// =========================================================================================================================
// Map

// Objects are used for storing keyed collections.
// Arrays are used for storing ordered collections.

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// new Map()            :   creates the map.
// map.set(key, value)  :   stores the value by the key.
// map.get(key)         :   returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key)         :   returns true if the key exists, false otherwise.
// map.delete(key)      :   removes the value by the key.
// map.clear()          :   removes everything from the map.
// map.size             :   returns the current element count.

let map = new Map();

map.set('1', 'Prasanna1');
map.set(1, 'Prasanna1num');
map.set(true, 'Boolean1');

// Object converts the keys into String
// where as Map keeps the type

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);
console.log(map.entries());

// Maps can also use Objects as keys
// (We can't use another object as key in an object)

let prasanna = { name: 'prasanna' };
let mallisetty = { name: 'mallisetty' };

let visitsCountObj = {}; // try to use an object

visitsCountObj[prasanna] = 234; // try to use 'prasanna' object as the key
visitsCountObj[mallisetty] = 123; // try to use 'mallisetty' object as the key, 'prasanna' object will get replaced

// That's what got written!
console.log(visitsCountObj); // 123

// Iteration over Map
let receipeMap = new Map([
  ['Radish', 1],
  ['Chilli', 2],
  ['Potato', 3],
]);

// iterate over keys (vegetables)
for (let vegetable of receipeMap.keys()) {
  console.log(vegetable);
}

// iterate over values (amounts)
for (let amount of receipeMap.values()) {
  console.log(amount);
}

// iterate over [key, value] entries
for (let entry of receipeMap) {
  console.log(entry);
}

// forEach() method

receipeMap.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

// Creating a Map from Object : Object.entries

let obj = {
  name: 'Prasanna',
  age: 30,
};

let prasannaMap = new Map(Object.entries(obj));

console.log(prasannaMap.get('name'));

// Object.fromEntries: Object from Map
// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let prices = Object.fromEntries([
  ['banana', 4.5],
  ['orange', 2.5],
  ['Grapes', 14.5],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices);
console.log(prices.orange); // 2
