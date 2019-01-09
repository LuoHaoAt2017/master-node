var http = require('http');
var fs = require('fs');
var ws = null;




http.createServer(function(req, res) {

  // console.log(
  //   'version', req.httpVersion, 
  //   'method', req.method,
  //   'url', req.url,
  //   'headers', req.headers
  // );

  req.on('data', function(data) {
    fs.open('./hello.txt', 'a', function(err, fd) {
      if (err) {throw err;}
      fs.createWriteStream(null, {
        encoding: 'utf-8', fd: fd
      }).write(data);
    });
  });

  //可以修改响应头或者设置新的响应头
  //注意setHeader必须在writeHead之前，
  //因为当调用writeHead()时，响应头已经发送出去了。
  //再设置已经没有意义了。
  res.setHeader('location', 'wuhan');
  //删除响应体中的键是Date的键值对。
  res.removeHeader('Date');
  res.writeHead(200, 'OK', {
    'Content-Type': 'text/html',
    'Cache-Control': 'max-age:3600'
  });
  //在发送响应头之后发送响应体
  var buffer = new Buffer('Hello World!')
  res.write(buffer);
  res.end();
}).listen(4000, 'localhost', function() {
  console.log('http server is listening 4000 port.');
});

//当客户端向服务器发起请求时，http服务器发射request事件，回调函数负责处理请求。
//客户端的请求会被传递到回调函数的req和res中。服务器端可以从req中获取请求参数，
//同时可以往res中写进数据。res最终会被发送给客户端。由于http是建立在TCP之上，
//因此res很可能就是依据套接字socket作为可写流的特性往客户端写数据。

//req就是request，根据以前看过的《http权威指南》和《图解HTTP》，可以猜到req对象
//中都有哪些属性可以使用。version --- method ---- url