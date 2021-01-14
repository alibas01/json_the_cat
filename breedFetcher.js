const request = require('request');
let arg = process.argv;
let breed = arg[2];
const URL = `http://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (err, response, body) => {
  if (err) {
    console.log(' err', err);
  }
  const catObj = JSON.parse(body);
  if (catObj.length === 0) {
    console.log('No results found');
  } else {
    console.log(catObj);
  }
});