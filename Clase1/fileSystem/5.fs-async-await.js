const {readFile} = require('node:fs/promises');

( async () => {
  const texto = await readFile('./data.xml', 'utf-8');

  console.log(texto);
})();