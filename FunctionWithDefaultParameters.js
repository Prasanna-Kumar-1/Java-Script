// Function with default parameters

// Example 1
function greetings(name = 'Prasanna') {
  let message = `Hello ${name}!How are you?`;
  return message;
}

console.log(greetings());

console.log(greetings('Yash'));
console.log(greetings('Jayanthi'));

// Example 2
function generateFullName(firstname = 'Jayanthi', lastname = 'Ramesh') {
  let space = ' ';
  fullName = firstname + space + lastname;
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName('Prasanna Kumar', 'Mallisetty'));
