const fs = require('node:fs'); // a partir de Node 16, se recomienda poner ':' antes del modulo

const stats = fs.statSync('./data.xml')

//sincrono
console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size //tamaño en bytes
);