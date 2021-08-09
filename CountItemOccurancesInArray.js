// Count item occurances in an arrays

const itemCounter = (arr, item) => {
  let count = 0;
  console.log(arr.flat(Infinity));
  arr.flat(Infinity).forEach((element) => {
    if (element == item) {
      count++;
    }
  });
  return count;
};

console.log(
  itemCounter(
    [
      ["A", "A", "A", "A", "A", "a"],
      ["a", "A", "A", "A", "A", "A"],
      ["A", "a", "A", "A", "A", "A"],
      ["A", "A", "A", "a", "A", "A"],
    ],
    "a"
  )
);
