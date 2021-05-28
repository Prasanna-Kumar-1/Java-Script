async function fetchapi() {
  const apiurl = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/';
  const response = await fetch(apiurl);
  let data = await response.json();
  console.log(data);
  show(data);
}
function show(data) {
  for (var a of data) {
    var s = '';
    var au = '';
    s += a.quote;
    au += a.author;
  }
  console.log(s);
  //   document.getElementById('d2').innerHTML = c + '* Celsius';
  //   document.getElementById('d1').innerHTML = s + '-' + au;
}
fetchapi();
