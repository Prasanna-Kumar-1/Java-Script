// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// array.slice(0, until) - Does not include last element

const n1 = [1, 2, 3, 4, 5];

console.log(n1.slice()); // -> it copies all  items
console.log(n1.slice(0)); // -> it copies all  items
console.log(n1.slice(0, n1.length)); // it copies all  item
console.log(n1.slice(1, 3)); // -> [A,B,C] // Excludes ending position

// Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const n2 = [1, 2, 3, 4, 5];
console.log(n2.splice()); // -> remove all items

const n3 = [1, 2, 3, 4, 5];
console.log(n3.splice(0, 1)); // remove the first item

const n4 = [1, 2, 3, 4, 5, 6];
console.log(n4.splice(2, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
