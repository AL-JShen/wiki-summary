const axios = require('axios');

process.argv.splice(0, 2);
const search = process.argv.join("_");

function printOut(inObj) {
  let pageNum = Object.keys(inObj.query.pages).toString();
  let output = inObj.query.pages[pageNum].extract;
  console.log(output);
}

const promise = axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=2&exintro=&explaintext=&titles=${search}`);

promise.then((response) => {
  printOut(response.data);
});
