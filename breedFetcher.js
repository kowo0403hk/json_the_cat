const request = require('request');

const fetchBreedDescription = (data, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${data}`, (error, resp, body) => {
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    let breedFound = data[0];
    
    if (breedFound) {
      return callback(null, breedFound.description);
    } else if (resp.statusCode === 404) {
      return callback('404 Page not found', null);
    } else {
      return callback('Breed not found', null);
    }
  });
};

module.exports = {fetchBreedDescription};