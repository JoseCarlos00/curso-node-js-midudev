const os = require('node:os')

console.log('Informacion del sitema operativo:');
console.log('___________________________________');

console.log('Nombre del sistema opertivo', os.platform());
console.log('Version del sistema opertivo', os.release());
console.log('Arquitectuta', os.arch());
console.log('CPUs',os.cpus().length , os.cpus()); // <-- Vamos a poder escalar procesos en Node.js
console.log('Memoria libre', os.freemem() / 1024 / 1024); 
console.log('Memoria totla', os.totalmem() / 1024 / 1024); 
console.log('upttime', os.uptime() /60 /60 );