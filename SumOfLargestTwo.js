function findMaxSum(numbers) {
  // Your code goes here

  const sortedArray = numbers.sort((a, b) => a - b);
  console.log(sortedArray);
  const result =
    sortedArray[sortedArray.length - 1] + sortedArray[sortedArray.length - 2];

  return result;
}

console.log(findMaxSum([5, 19, 7, 11])); // should print 20
