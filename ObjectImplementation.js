const prasanna = {
  firstName: "Prasanna",
  lastName: "Mallisetty",
  birthYear: 2000,
  job: "Automation Test Analyst",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2040 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}
        - years old ${this.job}, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's licence.`;
  },
};

console.log(prasanna.getSummary());
