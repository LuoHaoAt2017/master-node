/**
 * TCP服务器的创建
 * 关闭服务器端的TCP联结
 * 处理网络错误
 * 通过管道从TCP连接读取数据
 */

//使用net模块而不是http模块，创建服务器监听4001端口
var netWork = require('net');
//socket是套接字，通过socket可以读取
//客户端的请求数据，也可以向客户端发送数据
var server = netWork.createServer();
server.listen(4001, 'localhost', function() {
  //创建服务器，监听本地4001端口。
  //监听端口这个动作被服务器监听到，执行以下代码。
  console.log('server is listening 127.0.0.1:4001');
});

server.on('connection', function(socket) {
  console.log('connected to server.');
  
  socket.on('data', function(buffer) {
    var data = buffer.toString().trim();
    console.log('got data: ', data);
    if (data.toLowerCase() === 'quit') {
      socket.end();
      server.close();
    } else {
      socket.write('I love JavaScript!');
    }
  });

  socket.on('end', function() {
    console.log('no data to use.');
  });
});

server.on('close', function() {
  console.log('server is to close.');
});

server.on('error', function(err) {
  console.log('error message: ', err.message);
});