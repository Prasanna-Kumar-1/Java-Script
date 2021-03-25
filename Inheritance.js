// Inheritance

// Inheritance = is a way of extending class

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(
      `${this.name} runs with the ${this.speed} miles speed per hour`
    );
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} is stopped`);
  }
}

let animal = new Animal('My Animal');
animal.run(20);
animal.stop();

class Rabit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
}

let rabit = new Rabit('My White Rabbit');

rabit.run(20);
rabit.stop();
rabit.hide();
//
