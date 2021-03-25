// Set Operations

// (1) Adding an element to a set
const cities = new Set();
console.log(cities.size);

cities.add("Sydney");
cities.add("Brisbane");
cities.add("Melbourne");
cities.add("Adelide");
cities.add("Perth");

console.log(cities.size);
console.log(cities);

// use loop to add element to a set.

const ausCities = ["Sydney", "Brisbane", "Melbourne", "Adelide", "Perth"];

const ausCitiesSet = new Set();
for (const city of ausCities) {
  ausCitiesSet.add(city);
}

console.log(ausCitiesSet);

// Deleting an Element from the Set

console.log(ausCitiesSet.delete("Adelide"));
console.log(ausCitiesSet);
