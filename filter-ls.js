const path = process.argv[2];
const extension = process.argv[3];

const fs = require('fs');

fs.readdir(path, (err, files) => {
  files.forEach(file => {
    const fileExt = file.split('.').reverse()[0];
    if( ( fileExt === extension ) &&
        ( file.includes('.') ) )
      console.log(file);
  });
});
