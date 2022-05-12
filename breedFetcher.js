const request = require('request');

let breed = process.argv.slice(2);

const findBreed = (data) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${data}`, (err, resp, body) => {
    if (err) {
      //this only checks the connection error, not any other errors like 404 not found
      console.log('Error', err);
      console.log(resp.statusCode);
      return;
    }
    const data = JSON.parse(body);
    let breedFound = data[0];
    if (breedFound) {
      console.log(breedFound.description);
    } else if (resp.statusCode === 404) {
      console.log(`Page not found`);
    } else {
      console.log(`Breed not found`);
    }
  });
};


findBreed(breed);