// Arrow Function with default parameters

const generateFullName = (firstName = 'Jayanthi', lastName = 'Ramemsh') => {
  let space = ' ';
  fullName = firstName + space + lastName;
  return fullName;
};

console.log(generateFullName());
