// try - catch - finally implementation

// const numerator = 1000, denominator = 'a'

try {
  console.log(numerator / denominator);
  console.log(a);
} catch (err) {
  console.log('An error caught!');
  console.log('Error Message is :' + err);
} finally {
  console.log('Finally Block! This is always executed');
}

// finally and return

// The finally clause works for any exit from try...catch. That includes an explicit return.
//  The finally clause works for any exit from try...catch. That includes an explicit return.

function f1() {
  try {
    return 1000;
  } catch (err) {
    console.log('In Catch Block');
  } finally {
    console.log('In Finally Block');
  }
}

console.log(f1());

// Result :
// In Finally Block
// 1000
