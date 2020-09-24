// asyncBreeds.js
const fs = require('fs');
const request = require('request');

const fetcher = function(){
  const userArgs = process.argv.slice(2);
  const url = userArgs[0];
  const file = userArgs[1];

  // request(url, (error, response, body) => {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // });

  console.log(userArgs);
};

fetcher();