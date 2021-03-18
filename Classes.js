// Classes

// The constructor is a builtin function which allows us to create a blue print for our object
// The constructor function starts with a keyword 'constructor' followed by a parenthesis
// Inside the parenthesis we pass the properties of the object as parameter
// We use 'this' keyword to attach the constructor parameters with the class

// class Person {
//   constructor(firstname, age) {
//     this.firstname = firstname;
//     this.age = age;
//   }
// }

// const person1 = new Person();
// console.log(person1);

// const person2 = new Person('Prasanna', 30);
// console.log(person2);

// Default values with constructor

class Person2 {
  constructor(
    firstname = 'Prasanna',
    age = 30,
    country = 'Australia',
    city = 'Sydney'
  ) {
    this.firstname = firstname;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const p2 = new Person2();
const p3 = new Person2('Yash', 7, 'Australia', 'Sydney');

console.log(p2);
console.log(p3);

// Class Methods

class Person3 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
}

const p4 = new Person3('Prasanna', 'Mallisetty', 30, 'Australia', 'Sydney');
console.log(p4);

console.log(p4.getFullName());
