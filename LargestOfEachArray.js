// Largest of each array within an Array

// Steps:
// 1. Loop through each element of the outer Array (which contains arrays as elements)
// 2. Initialize the first element of the first array within outer array
// 3. Loop through each inner array and within each inner array element, compare it with the element in step 2
// 4. If it is larger, move it to new temporary array
// 5. Finally, return temporary array

function largestOfFour(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    // Push largest element of each array to result Array
    resultArray[i] = largest;
  }
  return resultArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
