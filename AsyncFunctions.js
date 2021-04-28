function increaseSalary(base, increase) {
  const newSalary = base + increase;
  console.log(`New Salary : ${newSalary}`);
  return newSalary;
}

increaseSalary(1000, 200);

// Slow Addition
function slowAddition(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n1 + n2), 2000);
  });
}

slowAddition(1, 5).then((sum) => console.log(sum));

// Async function

// An async function always returns a promise, which resolves to the value of return value inside the function body:

async function increaseSalary(base, increase) {
  const newSalary = await slowAddition(base, increase);
  console.log(`New Salary : ${newSalary}`);
  return newSalary;
}

increaseSalary(1000, 2000);

function slowAddition(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Unable to sum numbers')), 3000);
  });
}

slowAddition(1, 5).catch((e) => console.log(e.message));

// Handling a rejected Promise

async function increaseSalary(base, increase) {
  let newSalary;
  try {
    newSalary = await slowAddition(base, increase);
  } catch (e) {
    console.log(`Error : ${e.message}`);
    newSalary = base * 2;
  }
  console.log(`New Salary : ${newSalary}`);
  return newSalary;
}

increaseSalary(1000, 200);
