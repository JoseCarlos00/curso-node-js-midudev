const path = require('node:path');

// Barra deparadora de carpesas segun SO
console.log(path.sep);

// --> unix /
// --> windows \

// Unir rutas con path.join
console.log(path.join(__dirname,'view'));

const filePath = path.join('./contenr', 'subfolder', 'tes.txt');
console.log(filePath);

const base = path.basename('/tem/carpeta1/carpeta2/archivo.txt');
console.log(base);

const filename = path.basename('/tem/carpeta1/carpeta2/archivo.txt', '.txt');
console.log(filename);

const extension = path.extname('image.png');
console.log(extension);
