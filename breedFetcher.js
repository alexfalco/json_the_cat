const request = require('request');
//const breedName = require('./index');

const fetchBreedDescription = function(breedName, callback) {
  
  let website = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
 
  request(website, (error, response, body) => {
    
    if (error) {
      callback(error, null);
    }
      
    const data = JSON.parse(body);
    
    try {
      callback(null,data[0].description.trim());
    }
    
    catch (err) {
      callback(err,null);
    }
  
  });

};


module.exports = { fetchBreedDescription };






