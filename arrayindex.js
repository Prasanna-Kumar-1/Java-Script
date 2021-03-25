// Accessing Array using index

const cities = ["FirstCity", "SecondCity", "ThirdCity", "LastCity"];
let firstcity = cities[0]; // Accessing the first item using its index

console.log(firstcity); // FirstCity

secondcity = cities[1];
console.log(secondcity); // SecondCity

let lastcity = cities[3];
console.log(lastcity); // ThirdCity
// Last index can be calculated as follows

let lastcity1 = cities.length - 1;
lastcity = cities[lastcity1];

console.log(lastcity); // LastCity

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]; // List of countries

console.log(countries); // -> all countries in array
console.log(countries[0]); //  -> Albania
console.log(countries.length);

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]); //  -> Kenya
