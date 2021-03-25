// Regular expression

// A regular expression takes two parameters. One required search pattern and an optional flag.

// Pattern  :   A pattern could be a text or any form of pattern which some sort of similarity
// Flags    :   Flags are optional parameters in a regular expression which determine the type of searching. Let see some of the flags:

//              g   :   is a global flag which means looking for a pattern in whole text
//              i   :   case insensitive flag(it searches for both lowercase and uppercase)
//              m   :   multiline

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regEx = new RegExp("Prasanna", "gi");
console.log(regEx);
