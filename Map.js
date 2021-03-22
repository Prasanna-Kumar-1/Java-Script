// Maps

// Creating an empty Map
const map = new Map();
console.log(map);

// Creating an Map from array
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map1 = new Map(countries);
console.log(map1);
console.log(map1.size);

// Adding values to the Map
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Australia", "ACT");
countriesMap.set("New Zealand", "Auckland");
countriesMap.set("Malaysia", "Kaulalampur");
console.log(countriesMap);
console.log(countriesMap.size);

// Getting a value from Map
console.log(countriesMap.get("Australia"));

// Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
