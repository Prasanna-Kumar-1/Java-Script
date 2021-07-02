// Class Inheritance

// Overriding a Method
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    console.log(
      `${this.name} runs with the ${this.speed} miles per hour Speed`
    );
  }

  stop() {
    console.log(`${this.name} is stopped and not running`);
  }
}

class Rabit extends Animal {
  hide() {
    console.log(`${this.name} always hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabit = new Rabit("White Rabbit");
rabit.stop();

// Over riding constructor

// Rabit did not have its own constructor.

// If a class extends another class and has no constructor, then the following “empty” constructor is generated:

class Rabit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}

// It basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.

// NOTE: For the Rabbit constructor to work, it needs to call super() before using this, like here:

class Rabit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}
