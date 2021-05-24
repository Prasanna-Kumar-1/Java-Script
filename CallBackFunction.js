// Call Back Functions

// We can pass functions as parameters to other functions and call them inside the outer functions. This is called "callback"

// function printing(callback) {
//     callback();
// }

// // JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially.
// // This is called asynchronous programming.

// // Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
// // It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
// // In JavaScript, the way to create a callback function is to pass it as a parameter to another function,
// // and then to call it back right after something has happened or some task is completed

// // Anonymous Function

// // Alternatively, we can define a function directly inside another function, instead of calling it

setTimeout(function () {
  console.log('This message is shown after 3 seconds');
}, 3000);

// // Callback as an Arrow Function

setTimeout(() => {
  console.log('This message is shown after 3 seconds');
}, 3000);
