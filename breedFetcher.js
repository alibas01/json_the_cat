const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  // const callback = (error, desc) => {
  //   if (error) {
  //     console.log('Error fetch details:', error);
  //   } else {
  //     console.log(desc);
  //   }
  // })
  const URL = `http://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(URL, (err, response, body) => {
    const catObj = JSON.parse(body);
    if (err) {
      console.log("API Error", err.message);
      return;
    }
    if (catObj.length === 0) {
      callback("No results found.", null);
      return;
    }
        
    callback(null, catObj[0].description);
  });
};

module.exports = {fetchBreedDescription};