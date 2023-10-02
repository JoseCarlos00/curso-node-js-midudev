const fs = require('node:fs/promises');

fs.readFile('./data.xml', 'utf-8')
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err));