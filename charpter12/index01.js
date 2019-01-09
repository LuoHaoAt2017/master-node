var net = require('net');
//建立的连接是既是可读流也是可写流
var connection = net.createConnection(4001, function() {
  console.log('customer is listening at 4001');
});

connection.setEncoding('utf-8');

//监听connection对象发射connect事件
connection.once('connect', function() {
  console.log('connection is established');
  //当数据写进网络时调用回调函数
  setInterval(function() {
    connection.write('To be a rich man.', function() {
      console.log('data has been sent to network!');
    });
  }, 3000);
});

//发射data事件，监听来自服务器的数据。
connection.on('data', function(data) {
  console.log('data from server ', data.toString());
});

connection.on('error', function(err) {
  console.log('error message ', err.message, ' code ', err.code);
});