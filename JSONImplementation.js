// JSON - Java Script Object Notation

// JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.
// The difference between JavaScript Object and JSON is the key of a JSON object should be with double quotes or it should be a string

// Converting JSON to Object : JSON.parse()
// Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration
// In JavaScript the keyword JSON has parse() and stringify() methods

const usersText = `{
    "users":[
      {
        "firstName":"Prasanna",
        "lastName":"Mallisetty",
        "age":40,
        "email":"prasanna@hightech.com"
      },
      {
        "firstName":"Jayanthi",
        "lastName":"Ramesh",
        "age":25,
        "email":"jayanthi.ramesh@woodlands.com"
      },
      {
      "firstName":"Yash",
      "lastName":"Mallisetty",
      "age":28,
      "email":"yash.mallisety@ati.com"
      }
    ]
    }`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);

// Converting Object to JSON : JSON.stringify()
// JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function

const users = {
  Alex: {
    email: 'prasanna@hightech.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
};

const txt = JSON.stringify(users);
console.log(txt);

// Using a Filter Array with JSON.stringify

const users = {
  email: 'prasanna@hightech.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 20,
  isLoggedIn: false,
  points: 30,
};

const txt = JSON.stringify(users, ['email', 'skills', 'age', 'points']);
console.log(txt);
