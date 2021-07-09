// Exception handling

// For all built-in erros, the error object has three main properties

// name = Error name
// message = Textual message about error details
// stack = current call stack

try {
  hellothere;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

let json = "{bad json}";

try {
  let parse1 = JSON.parse(json);
} catch (err) {
  console.log("Data is wrong! Request it one more time");
  console.log(err.name);
  console.log(err.message);
}

// Throw Operator :

let json2 = '{"age" : 30}';

try {
  let user = JSON.parse(json2);

  if (!user.name) {
    throw new SyntaxError("Incomplete Data : no name");
  }
  console.log(user.name);
} catch (err) {
  console.log("JSON Error : " + err.message);
}
