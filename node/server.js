const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const nombrecompleto = "Dennys aron ruiz paredes"

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${nombrecompleto}`);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
