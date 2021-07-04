//  Static properties and methods

// the 'static' keyword lets you define a function on the class itself, as opposed to instances of the class.
class myClass1 {
  static myFunction() {
    return 2021;
  }
}

// typeof myClass1.myFunction;
let classThisYear = myClass1.myFunction();
console.log(classThisYear);

// lets instantiate the class and check

const obj = new myClass();
let objectThisYear = obj.myFunction();
console.log(objectThisYear);

// Gives us the error : Uncaught TypeError: obj.myFunction is not a function

// Within static functions, this refers to the class.

class MyClass2 {
  static myFunction() {
    return this;
  }
}

console.log(MyClass2.myFunction() === MyClass2);

// Static Properties    :   Static properties, also known as class fields

class MyClass3 {
  static answer = 2021;
}

console.log(MyClass3.answer); // 2021
