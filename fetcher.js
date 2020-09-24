// asyncBreeds.js
const fs = require('fs');
const request = require('request');
const readline = require('readline');


const fetcher = function() {
  const userArgs = process.argv.slice(2);
  const url = userArgs[0];
  const file = userArgs[1];

  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    fs.access(file, fs.F_OK, (err) => {
      console.log(err);
      if (!err) {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        rl.question('File already exists. Overwrite?? (Type y to overwrite)', (answer) => {
          if (answer !== 'y') {
            console.log('The file was not overwritten.');
            return;
          } else {
            
            fs.writeFile(file, body, () => {
              //console.log(err);
              if (!body) {
                console.log('URL has resulted in an error.');
              } else {
                console.log('The file has been saved!');
              }
            });
          }
          
        });
        
      } else {
        fs.writeFile(file, body, (err) => {
          if (!body) {
            console.log('URL has resulted in an error.');
          } else if (err) {
            if (err['code'] === 'ENOENT') console.log('No such file or directory');
          } else {
            console.log('The file has been saved!');
          }
        });

      }
      
    
      //file exists
    });
    
    
    
      
    
  });

};

fetcher();