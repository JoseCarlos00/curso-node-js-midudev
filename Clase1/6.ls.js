const fs = require('node:fs')
const path = require('node:path');

const directorioActual = path.join(__dirname)
console.log(directorioActual);

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file);
  })
})
