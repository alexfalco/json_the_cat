const request = require('request');


let name = process.argv.slice(2).toString();
console.log(`name of dog: ${name}`);


let website = `https://api.thecatapi.com/v1/breeds/search?name=${name}`;


request(website, (error, response, body) => {
  
  if (error) {
    console.log('login error:',error);
  }
    

  const data = JSON.parse(body);
  
  try {
    console.log(data[0].description);
  }
  
  catch (err) {
    console.log('error: name not found ');
  }

 

  

});

