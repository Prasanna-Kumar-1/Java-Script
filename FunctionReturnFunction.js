// function returning new function

const greet = function (greeting) {
  return function (name) {
    console.log(`Hello Mr.${name}! ${greeting}`);
  };
};

const greeterHey = greet('Hey');
// function greet here retunns a new function and we store it in constant

greeterHey('Prasanna');
