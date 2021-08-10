// Checking if the string is Palindrome

// (1) First split the string
// (2) Use reverse function
// (3) Join

// (4) Compare it with original string. If they are equal, print the message accordingly
function checkPalindrome(str1) {
  if (str1 == str1.split("").reverse().join("")) {
    console.log("String is Palindrome");
  } else {
    console.log("String is NOT Palindrome");
  }
}

checkPalindrome("madam");
