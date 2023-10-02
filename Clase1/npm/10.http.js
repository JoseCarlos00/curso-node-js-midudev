const http = require('node:http');
const { findAvailablePort } = require('./9.free-port.js');

const server = http.createServer((req, res) => {
  console.log('reciviendo request');
  res.end('Hello word')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  })
})

// server.listen(0, () => {
//   console.log(`Server listening on port http://localhost:${server.address().port}`);
// })