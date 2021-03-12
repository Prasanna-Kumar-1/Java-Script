// De Structuring Arrays

const items = ["item1", "item2", "item3"];
let [itemOne, itemTwo, itemThree] = items;

console.log(itemOne, itemTwo, itemThree);

const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

// Destructruing Array of Arrays

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);

// Omitting a value during Destructuring

const numbers2 = [1, 2, 3];
let [num2One, , num2Three] = numbers2;

console.log(num2One, num2Three);

// Destructuring during iteration

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third, fourth] of fullStack) {
  console.log(first, second, third, fourth);
}
