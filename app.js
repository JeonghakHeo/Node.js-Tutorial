const http = require('http');

// whenever we senda reqeust to the server, the function will fire
const server = http.createServer((req, res) => {
  console.log('requrest was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('lisetning to port 3000');