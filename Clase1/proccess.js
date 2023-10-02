/**
 * Es un objeto global que proporciona informacion 
 * y control sobre el proceso actual de ejecucion
 */

// console.log(process.argv);
/**
 * $ node proccess.js hola mundo
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\joska\\OneDrive\\PROYECTOS\\PROGRAMACION\\node_JS_MINDU\\proccess.js',
  'hola',
  'mundo'
]
 */

// Controla el proceso y su salida
/**
 * 0 todo a ido bien y el proceso tiene que terminar
 * 1 A habido un error y queremos que salga
 */
// process.exit(1);

// Podemos controlar eventos del proceso
// process.on('exit', () => {
//   console.log('Limpiar los recursos');
// })

// Current working directory
console.log(process.cwd());

