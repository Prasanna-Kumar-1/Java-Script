// Implementation of Fibonocci series

const nmbr = parseInt(prompt("Enter a positive number: "));
let n1 = 0;
let n2 = 1;

console.log(n1);
console.log(n2);

nextNum = n1 + n2;

while (nextNum <= nmbr) {
  console.log(nextNum);

  n1 = n2;
  n2 = nextNum;
  nextNum = n1 + n2;
}
