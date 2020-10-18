const http = require('http');
const fs = require('fs');

// we don't have to manually listen for data event, instead pipes will automatically do this process


// whenever we send a reqeust to the server, the function will fire
const server = http.createServer((req, res) => {
  console.log('requrest was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
  myReadStream.pipe(res);
   
});

server.listen(3000, '127.0.0.1');
console.log('lisetning to port 3000');

