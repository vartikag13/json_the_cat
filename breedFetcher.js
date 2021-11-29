const request = require('request');

const apiURL = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv[2];

const cb = (data) => {
  const parsedData = JSON.parse(data);

  if (parsedData.length === 0) {
    return "Requested breed not found :(";
  } else {
    return parsedData[0].description;
  }
};

request(apiURL + breed, (err, res, body) =>{
  if (!err) {
    console.log(cb(body));
  } else {
    console.log(`Request failed :( \n${err}`);
  }
});