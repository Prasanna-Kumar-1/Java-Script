// Array looping

// traditional way of looping through Array elements
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// looping through Array elements using forEach( ) method

// The forEach method passes a "callback function" for each element of an array together with the following parameters:

// (1) Current Value (required) - The value of the current array element
// (2) Index (optional) - The current element's index number
// (3) Array (optional) - The array object to which the current element belongs

['Prasanna', 'Prasssy', 'Mallisetty', 'Kumar'].forEach(alert);

['Prasanna', 'Prassy', 'Mallisetty', 'Kumar'].forEach((item, index, array) => {
  console.log(`${item}  is at index ${index} in ${array}`);
});
