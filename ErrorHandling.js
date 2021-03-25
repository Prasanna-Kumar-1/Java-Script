// Java Script Error handling

// try {
//   // code that may throw an error
// } catch (err) {
//   // code to be executed if an error occurs
// } finally {
//   // code to be executed regardless of an error occurs or not
// }

try {
  let lastName = 'Mallisetty';
  let fullName = firstName + ' ' + lastName;
} catch (err) {
  console.log(err);
}

// Above code returns ErrorHandling.js:15 ReferenceError: firstName is not defined

// Catch Block : The catch block take a parameter.
//               It is common to pass e, err or error as a parameter to the catch block.
//               err    :   This parameter is an object and it has name and message keys

try {
  let lastName = 'Mallisetty';
  let fullName = firstName + ' ' + lastName;
} catch (err) {
  console.log('Name of the error  :  ', err.name);
  console.log('Error message      :  ', err.message);
} finally {
  console.log('Finally! This block will be executed anyway');
}

// Throw    :   Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception

const throwErrorExample = () => {
  let errorMessage;
  let n = prompt('Enter a Number : ');
  try {
    if (n == '') throw 'empty';
    if (isNaN(n)) throw 'Not a Number';
    nber = Number(n);
    if (nber < 5) throw 'Number is very small';
    if (nber > 100) throw 'Number is too big';
  } catch (err) {
    console.log(err.message);
  }
};

throwErrorExample();
