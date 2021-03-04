// Object Methods

// Object: Key: Value pairs
// Object literal syntax - literally writng the object content

const prasanna = {
  firstName: "Prasanna",
  lastName: "Mallisetty",
  birthYear: 2000,
  job: "Automation Test Analyst",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //     return 2040 - birthYear
  // }

  calcAge: function () {
    console.log(this);
    return 2040 - this.birthYear;
  },
};

// console.log(prasanna.calcAge(2000));
// console.log(prasanna['calcAge'](2010));

console.log(prasanna.calcAge());
