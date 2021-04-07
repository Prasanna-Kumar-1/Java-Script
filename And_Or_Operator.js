// Short Circuting - And & OR

// Result of operators && or || can be truthy value..
// meaning it can be a value other than True or False

// IMP: OR always returns first truthy value

console.log('------------ OR Operator ------------');
console.log(3 || 'Prasanna'); //returns first truthy value 3
console.log('' || 'Prasanna'); // Prasanna
console.log(true || 0); // true
console.log(undefined || null); // null (NOTE: Undefined is falsy vlaue)

// IMP: AND always returns first FALSY value
//      If both the values are TRUTHY, then last TRUTHY will be returned
console.log('------------ AND Operator ------------');
console.log(0 && 'Prasanna'); // First falsy value
console.log(1 && 'Prasanna'); //both Truthy, so 'Prasanna' is returned
