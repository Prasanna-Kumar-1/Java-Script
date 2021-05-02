// continue and break

const prasannaArray = [
  'Prasanna',
  'Mallisetty',
  20,
  'Automation Tester',
  ['Michael', 'Peter', 'Steven'],
];

// // Using the length function
console.log('--- ONLY STRINGS ---');
for (let i = 0; i <= prasannaArray.length; i++) {
  if (typeof prasannaArray[i] !== 'string') continue;
  console.log(prasannaArray[i], typeof prasannaArray[i]);
}

console.log('--- BREAK IF IT IS A NUMBER ---');
for (let i = 0; i <= prasannaArray.length; i++) {
  if (typeof prasannaArray[i] === 'string') continue;
  console.log(prasannaArray[i], typeof prasannaArray[i]);
}
