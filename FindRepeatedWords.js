function findRepeatedWords(inputString) {
  // Split the input string into array of words
  const inputStrArray = inputString.split(" ");
  const repeatedArray = [];

  for (let i = 0; i < inputStrArray.length; i++) {
    if (
      // loop through from starting index to ending index
      inputStrArray.indexOf(inputStrArray[i]) !=
      inputStrArray.lastIndexOf(inputStrArray[i])
    ) {
      // if the item is not present in the repeated array, push the item
      if (!repeatedArray.includes(inputStrArray[i])) {
        repeatedArray.push(inputStrArray[i]);
      }
    }
  }

  return repeatedArray.join(" ");
}

console.log(
  findRepeatedWords("big black bug bit a big black dog on his big black nose")
);
