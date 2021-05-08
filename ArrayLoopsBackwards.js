// Array looping back wards

const prasannaArray = [
  'Prasanna',
  'Mallisetty',
  20,
  'Automation Tester',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = prasannaArray.length - 1; i >= 0; i--) {
  console.log(prasannaArray[i]);
}

// ==============================================================================================
// loops inside loops

// Array looping back wards

const prasannaArray = [
  'Prasanna',
  'Mallisetty',
  20,
  'Automation Tester',
  ['Michael', 'Peter', 'Steven'],
];

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------ starting exercise' ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Liting weight repetition ${rep} :-)`);
  }
}
