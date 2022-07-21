// Count Total number of zeros from 1 upto n

function countZeros(num1) {
  let count = 0;
  while (num1 > 0) {
    count += Math.floor(num1 / 10);
    num1 = num1 / 10;
  }
  return count;
}

console.log(countZeros(100));
