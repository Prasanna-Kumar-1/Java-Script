// forEach

// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr);
// });
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr);
// });
// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr));

const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((num) => console.log(num));

let sum = 0;
const numbers2 = [6, 7, 8, 9, 10];
numbers2.forEach((num) => (sum += num));
console.log(sum);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((country) => console.log(country.toUpperCase()));
