//创建一个TCP聊天服务器

//step_one：创建服务器
var server = require('net').createServer();
var port = 4001;

//step three: 聚合所有的连接
var sockets = new Array();

server.listen(port, function() {
  console.log('server listening port 4001');
});

server.on('error', function(error) {
  console.log(error.message);
});

server.on('close', function() {
  console.log('server closed');
});

server.on('listening', function() {
  console.log('server is listening at port ', port);
});

//step two: 接受客户端的连接
server.on('connection', function(socket) {

  //因为服务器需要向所有客户端广播数据，
  //所以需要将所有连接存储起来。便于后续遍历连接。
  sockets.push(socket);

  socket.on('connect', function() {

  });

  socket.on('data', function(data) {
    //每当一个客户端向服务器发送数据，就将该客户端发送到服务器的数据
    //广播到除了该客户端以外的所有客户端。
    sockets.forEach(function(otherSocket) {
      socket !== otherSocket && otherSocket.write(data);
    });
  })

  socket.on('error', function(err) {

  });

  socket.on('drain', function() {

  });

  socket.on('end', function() {

  });

  socket.on('timeout', function() {
 
  });

  socket.on('close', function(hadError) {
    if (hadError === false) {
      var index = sockets.indexOf(socket);
      sockets.splice(index, 1);
    }
  });
});

 

