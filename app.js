const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Aplicação rodando');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});