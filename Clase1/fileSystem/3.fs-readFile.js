const fs = require('node:fs');

fs.readFile('./data.xml', 'utf-8', (err, text) => {
  if (err) throw err;
  console.log(text);
});
