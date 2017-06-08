const axios = require('axios');

const search = process.argv[2];
// let newSearch = '';
// 
// for (let i = 0; i < search.length; i++) {
//   if (i === ' ') {
//     newSearch += '_';
//   } else {
//     newSearch += i;
//   }
// }

function printOut(inObj) {
  let pageNum = Object.keys(inObj.query.pages).toString();
  let output = inObj.query.pages[pageNum].extract;
  console.log(output);
}

const promise = axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=2&exintro=&explaintext=&titles=${search}`);

promise.then((response) => {
  printOut(response.data);
});