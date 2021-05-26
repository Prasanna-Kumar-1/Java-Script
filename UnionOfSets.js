// Union of Sets

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
console.log(A);
let B = new Set(b);
console.log(B);
let C = new Set(c);
console.log(C);
