// Generator Functions

// a generator is a function that can stop midway and then continue from where it stopped.

// (1) Generators are a special class of functions that simplify the task of writing iterators.
// (2) A generator is a function that produces a sequence of results instead of a single value, i.e you generate ​a series of values

// IMP Points:
// (1) We dont have return inside generator function
// (2) yield - an operator with which a generator can pause itself
// (3) Every time a generator encounters a yield, it “returns” the value specified after it
//
// function* generatorFunction() {
    console.log('This will be executed first.');
    yield 'Hello, ';

    console.log('This will be printed after the pause');
    yield 'World!'
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
