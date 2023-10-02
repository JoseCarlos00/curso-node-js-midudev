const http = require('node:http');
const { findAvailablePort } = require('../Clase1/npm/9.free-port.js');




function usuarioCreate(req, res) {
  const usuario = {
    name: "Jose Carlos",
    password: 1234,
    old: "18 años"
  }
  req.user = usuario;
}

function processRequest(req, res) {
  if (req.url === '/') {
    res.statusCode = 202;
    res.setHeader('Content-Type', 'text/plain');
  }


  res.end('Paguina de Inicio');
}



const server = http.createServer(processRequest)







// Listen on port
findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  })
})

