function countRepeatedChar(str1) {
  // Destructure input and sort
  const inputString = [...str1].sort();
  const repeatedChar = [];

  for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString[i] === inputString[i + 1]) {
      repeatedChar.push(str1[i]);
    }
  }
  // Move into a set to delete duplicates
  return [...new Set(repeatedChar)];
}

console.log(countRepeatedChar("aabbkdndiccoekdczufnrz"));
