//构建一个静态文件服务器
//客户端发送要获取某个文件的请求
//服务器端根据URL返回指定的资源

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
  var url = req.url;
  var file = path.resolve('.', url.substring(1).trim());
  fs.exists(file, function(exists) {
    console.log('file ', file, ' exists ', exists);
    if (exists) {
      fs.stat(file, function(err, stats) {
        if (err) {
          res.writeHead(500);
          res.end('server error!');
        } else if (stats.isDirectory()) {
          res.writeHead(403);
          res.end('refuse to explain!');
        } else {
          res.writeHead(200, 'OK');
          fs.createReadStream(file, {encoding: 'utf-8'}).pipe(res);
        }
      })
    } else {
      res.writeHead(404);
      res.end('source not found!');
    }
  });
}).listen(4000, 'localhost');

//发现一个奇怪的现象：无法读取.txt文件