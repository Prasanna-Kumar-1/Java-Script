// Higher Order Functions

// Higher Order functions accept function as parameters

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function : Takes in a function as a parameter
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//
const high5 = function () {
  console.log('Hi');
};

['Prasanna1', 'Prasanna2', 'Prasanna3'].forEach(high5);
