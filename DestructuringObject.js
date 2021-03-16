// Destructuring Objects

const prasannaObject = {
  myname: "Prasanna",
  age: 25,
  city: "Sydney",
};

let { myname, age, city, nextjob } = prasannaObject;

console.log(myname, age, city, nextjob);

// If the key is not found in the object the variable will be assigned to undefined.
// In case, the key is not in the object we can give a default value during declaration

const prasannaObject2 = {
  myname2: "Prasanna",
  age2: 25,
  city2: "Sydney",
};

let {
  myname2,
  age2,
  city2,
  nextjob2 = "Aiming for Big 4 of Sydney",
} = prasannaObject2;

console.log(myname2, age2, city2, nextjob2);

// Destructring keys as function parameters

// Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));

// with Destructuring
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect));
