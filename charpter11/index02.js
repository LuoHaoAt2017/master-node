var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'video/mp3'});
  fs.createReadStream('./test.mp3').pipe(res);
}).listen(4000, 'localhost');