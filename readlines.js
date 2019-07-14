const fs = require('fs');

let fileContents = fs.readFileSync(process.argv[2]);

let text = fileContents.toString();

const lines = text.split('\n').length -1;

console.log(lines);
