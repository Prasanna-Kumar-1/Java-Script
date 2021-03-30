// Spread Operator

const menu = ['Pizza', 'Garlic Bread', 'Burger', 'Biryani'];

// Spread Operator
console.log(...menu); // Prints the individual elements of the array

const newMenu = [...menu, 'BBQ Chicken'];
console.log(newMenu);
console.log(...newMenu);

// Spread Operator can be used on all Iterables

// Iterables : Arrays, Strings, Maps and Sets.
// OBJECTS are not Iterables

const str = 'Prasanna';
const letters = [...str, ' ', 'M.'];
console.log(letters);
console.log(...str);

// We can use spread operator on Object although Object is not Iterbale

const me = {
  name: 'Prasanna',
  age: 30,
};

const meMore = { ...me, cityLivesIn: 'Sydney' };

console.log(meMore);
