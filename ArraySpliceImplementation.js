// Array Splice Method

// arr.splice(start[, deleteCount, elem1, ..., elemN])
// arr.splice(Startfrom[, deletenextelements, element1,...., elementN])

// (1) start        :   It modifies arr starting from the index start:
// (2) deleteCount  :   removes deleteCount elements and
// (3)                  then inserts elem1, ..., elemN at their place.
// (4) Returns the array of removed elements.

let arr1 = ['Prasanna', 'is studying', 'JavaScript', 'right', 'now'];

arr1.splice(0, 3, 'Prasanna', 'is dancing');
console.log(arr1);

let removed = arr1.splice(0, 2);
console.log(removed);

// // The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0

let arr2 = ['Prasanna', 'is studying', 'JavaScript', 'right', 'now'];

// // from index 2
// // delete 0
// // then insert "complex" and "language"

arr2.splice(2, 0, 'Complex', 'Language');
console.log(arr2);

// // Negative indexes - To Process from the end of the array

let arr3 = [1, 2, 5];

arr3.splice(-1, 0, 3, 4);
console.log(arr3);
