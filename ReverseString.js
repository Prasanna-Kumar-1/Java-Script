// Reversing a String

// (1) Split the string
// (2) Reverse the string
// (3) Join
function reverseString(str1) {
  console.log(str1.split("").reverse().join(""));
}

reverseString("Prasanna");

//Reverse words
function reverseWords(str2) {
  console.log(str2.split(" ").reverse().join());
}

reverseWords("We love JavaScript");
