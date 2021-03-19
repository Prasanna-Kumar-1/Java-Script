// String Methods Implementation

// Searching for Sub String

//str.indexOf(substr, pos)

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

let string1 = 'Prasanna loves JavaScript';

console.log(string1.indexOf('loves'));

console.log(string1.indexOf('loves', 2));

// Finding all occurances using a loop

let string2 = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPosition = string2.indexOf(target, pos);
  if (foundPosition == -1) break;
  console.log(`Found at ${foundPosition}`);
  pos = foundPosition + 1;
}

// Searching from the end

let string3 = 'Prasanna loves JavaScript';

console.log(string3.lastIndexOf('loves'));

// IMP: We can’t put it in the if like this:

let string4 = 'Prasanna loves JavaScript';

if (string4.indexOf('Prasanna')) {
  console.log('The Sub-String Prasanna is found!');
}

// str.indexOf("Widget") returns 0 (meaning that it found the match at the starting position). Right, but if considers 0 to be false.

if (string4.indexOf('Prasanna') != -1) {
  console.log('Yey! the Sub-string Prasanna is found');
}

// IMP : if (~str.indexOf(...)) = if found
