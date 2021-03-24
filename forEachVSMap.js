// forEach (vs) Map Array Methods

// forEach() — executes a provided function once for each array element.
// map() — creates a new array with the results of calling a provided function on every element in the calling array.

// (1) The forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array.
// This callback is allowed to mutate the calling array.

// (2) Where as, the map() method will also call a provided function on every element in the array.
// The difference is that map() utilizes return values and actually returns a new Array of the same size.

let arr = [1, 2, 3, 4, 5];

// forEach()
arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});

console.log(arr);

// Note : Here, forEach() throws away return values and always returns undefined.
//        We are exclusively, doubling the number and assigning to array elements.
//        This way, the result would be  [2, 4, 6, 8, 10] where as map(), we dont need to do this.
//        It 'callbacks' the function on each element of the array and returns a new array

// map()

let arrDoubled = arr.map((num) => {
  return num * 2;
});

console.log(arrDoubled);

// forEach() may be preferable when you’re not trying to change the data in your array,
// but instead want to just do something with it — like saving it to a database or logging it out

// And map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array
