// Getter and Setter

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = '';
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }

  getvotingEligibility() {
    if (this.age > 21) {
      const votingEligibility = true;
      return `${this.firstName} is eligible to vote`;
    } else {
      return `${this.firstName} is too young to vote`;
    }
  }
  setCity(city) {
    this.city = 'Sydney';
    return this.city;
  }
}

const person1 = new Person('Prasanna', 'Mallisetty', 40);

console.log(person1.getFullName());
console.log(person1.getvotingEligibility());

const person2 = new Person('Prasanna', 'Mallisetty', 40);

console.log(person2.getFullName());
console.log(person2.getvotingEligibility());
console.log(person2.setCity());
