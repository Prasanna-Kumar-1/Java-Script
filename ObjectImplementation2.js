// Objects - this in methods

// the value of this is the object “before dot”, the one used to call the method.
// if obj.function() is called, then 'this' is obj during the call of function

let user = {
  name: 'Prasanna',
  age: 30,
  sayHi() {
    console.log(`Hello! Mr.${this.name}`);
  },
};

user.sayHi();

// Accessing Object without 'this', by referencing it via the outer variable

let user1 = {
  name: 'Prasanna',
  age: 30,

  sayHi() {
    console.log(user1.name); // "user" instead of "this"
  },
};

// We can still use user.name, but If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else,
//then it will access the wrong object

let user2 = {
  name: 'Prasanna',
  age: 30,

  sayHi() {
    console.log(user2.name); // "user" instead of "this"
  },
};

let admin = user2;
user2 = null;

admin.sayHi();

// Calling 'this' without an object

function sayHi() {
  console.log(this);
}

sayHi(); //undefined

// Arrow functions does not have 'this'

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: 'Prasanna',
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user.sayHi();

let family = {
  title: 'My family',
  members: ['Prasanna', 'Jaynthi', 'Yash'],

  showList() {
    this.members.forEach((member) => console.log(this.title + ' : ' + member));
  },
};

family.showList();

// Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new.
