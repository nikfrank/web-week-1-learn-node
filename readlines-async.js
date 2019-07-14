const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, (err, file)=> {
  const result = file.toString().split('\n').length -1;
  
  console.log(result);
});

