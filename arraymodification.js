// Modifying elements of an Arrya

const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia"];
console.log("Before Modification");
console.log(countries);
countries[0] = "Australia"; // Replacing Albania by Australia
let lastIndex = countries.length - 1;
countries[lastIndex] = "India"; // Replacing Ethiopia by India
console.log("After Modification");
console.log(countries);
