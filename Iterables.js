// Iterables

// An object that is returned by the iterable interface is also an iterator object.

// Iterator object have a next() method which returns the next item in the sequence.
// This method returns an object with two properties: done and value and when next() calls reach to the end of sequence then the done property set to true else remain false .
// So the next on an iterator return :
// { value: ‘Current value of iteration’, done: ‘true / false’ }

// Symbol.iterator is the protocol that makes native objects like Array, Set, and Map iterable by providing a hook into language features like for…of loops and the spread operator.

const arr = [1, 2, 3, 4, 5];

const iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// The actual Symbol.iterator protocol is very simple. It includes:
// Iterable: an object with a function whose key is Symbol.iterator
// Iterator: the above function, used to obtain the values to be iterated

const iterable = {
    [Symbol.iterator](): iterator
}

const iterator = {
    next: () => ({
        value: any,
        done: boolean
    })
}

// writing custom Iterable

const customIterable = {
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next() {
                if (counter < 5) {
                    counter++;
                    return { done: false, value: counter };
                } else {
                    return { done: true, value: undefined };
                }
            }
        }
    }
}

for (const x of customIterable) {
    console.log(x)
}

// iterate array backwards

const reverse = arr => ({
    [Symbol.iterator]() {
        let i = arr.length;
        return {
            next: () => ({
                value: arr[--i],
                done: i < 0
            })
        }
    }
})

let numArr = [1, 2, 3, 4, 5]

console.log(numArr);
console.log([...numArr.reverse()])
