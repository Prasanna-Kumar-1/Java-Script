// Destructuring

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Using split() method to separate the items

// let [firstName, surname] = 'Prasanna Mallisetty'.split(' ');
// console.log(firstName); // Prasanna
// console.log(surname); // Mallisetty

// We can use any “assignables” at the left side.
// For instance, an object property:

// let user = ({}[(user.firstName, user.secondname)] = 'Prasanna Mallisetty'.split(
//   ' '
// ));

// console.log(user.firstName);
// console.log(user.secondname);

// Using Object.entries(obj) method along with destructuring to loop over keys-and-values of an object:

let user = {
  name: 'Prasanna',
  age: 30,
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
