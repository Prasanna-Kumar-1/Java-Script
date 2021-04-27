// Handling fetch errors

async function fetchData() {
  const response = await fetch('/oops');

  console.log(response.ok);
  // this is true if response has status is 200-299
  // Here, the status is 404, so response.ok is set to false
  console.log(response.status);

  const text = await response.text();
  return text;
}

fetchData().then((text) => {
  console.log(text);
});

// Throwing an error on bad HTTP status

async function fetchData() {
  const response = await fetch('/oops');

  if (!response.ok) {
    const message = `An error occured : ${response.status}`;
    throw new Error(message);
  }
  // throwing an error so that it can be used when consuming promises
  // if the promise is NOT RESOLVED

  const data1 = await response.json();
  return data1;
  // returning data so that it can be used when consuming promises
  // if the promise is RESOLVED
}

// consume promise
fetchData().catch((error) => {
  console.log(error.message);
});
