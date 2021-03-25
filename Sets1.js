// Creating a set from an Array

// NOTE: This technique can be used to remove duplicates from an Array
//       To Remove duplicates from an Array, convert it to set

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLangauges = new Set(languages);
console.log(setOfLangauges);

// Iterating through Set Elements

for (const language of setOfLangauges) {
  console.log(language);
}
