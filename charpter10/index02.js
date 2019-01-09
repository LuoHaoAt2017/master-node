var writeStream = require('fs').createWriteStream('./target.txt');
var server = require('net').createServer();

server.listen(4002, 'localhost', function() {
  console.log('server listening localhost:4002');
});

server.on('connection', function(socket) {
  socket.on('data', function(data) {
    var data = data.toString().trim();
    console.log('data: ', data);
    socket.pipe(writeStream);
  });
});

//source.pipe(destination)