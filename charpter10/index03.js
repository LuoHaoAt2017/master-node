var fs = require('fs');
var path = require('path');
var server = require('net').createServer();

server.listen(4003, 'localhost', function() {
  console.log('server listening localhost:4003');
});

server.on('connection', function(socket) {
  //在发送TCP数据包之前首先缓冲数据包，如果缓冲数据包，那么就会延迟发送数据包。
  //socket.setNoDelay(false);
  //如果有数据发送，那就发送数据。如果没有数据发送，那就发送空数据包。
  //也就是一直维持连接状态，不让连接因为超时而关闭。
  //socket.setKeepAlive(true);

  var filePath = path.resolve(__dirname, 'hello.txt')
  fs.open(filePath, 'r', function(err, fd) {
    if (err) {throw err}
    fs.createReadStream(null, {
      encoding: 'utf-8', fd: fd
    }).pipe(socket, {end: false});
  });

  //一旦TCP连接在两个对等终端之间建立起来，就会一直保持连接状态。
  //直到其中一方中断连接。
  //问题是TCP数据链路是独占的。如果数据链路中空闲很久，那就是浪费。
  //Node专门为这种情况设计了解决方法，那就是setTimeout。一旦本地
  //套接字超出一定时间都是处于空闲状态，也就是说，既没有接收数据，
  //也没有发送数据那么就会自动关闭连接。

  socket.setTimeout(1000 * 5);
  socket.on('timeout', function() {
    socket.write('\n it is time to end connection.');
    socket.end();
  });

  socket.on('end', function(hadError) {
    if (hadError) {
      console.log('encounter error when close link');
    } else {
      console.log('no data to access.');
    }
  });
});

server.on('close', function() {
  console.log('server is to close!');
});

server.on('error', function(err) {
  console.log(err);
});
