// Object Methods

// (1) Object assign
const person = {
  firstName: "Prasanna",
  age: 40,
  country: "Australia",
  city: "Sydney",
  skills: ["HTML", "CSS", "JS"],
  title: "Automation Tester",
  address: {
    street: "Baulkham Hills",
    Postcode: 2153,
    city: "Sydney",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
console.log(copyPerson.getPersonInfo());

// Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson);
console.log(keys);

const address = Object.keys(copyPerson.address);
console.log(address);

// Getting object values using Object.values()
// Object.values:To get values of an object as an array

const values = Object.values(copyPerson);
console.log(values);

// Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson);
console.log(entries);

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty("firstName"));
console.log(copyPerson.hasOwnProperty("age"));

console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
