const http = require('http');
const fs = require('fs');

// we don't have to manually listen for data event, instead pipes will automatically do this process


// whenever we send a reqeust to the server, the function will fire
const server = http.createServer((req, res) => {
  console.log('requrest was made: ' + req.url)
  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas') {
    const ninjas = [{name: 'mario', age: 29}, {name: 'yoshi', age:24}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('lisetning to port 3000');

