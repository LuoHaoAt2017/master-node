var http = require('http');
var fs = require('fs');

var options = {
  host: 'www.baidu.com',
  port: 80,
  path: './index.html',
  method: 'GET',
  headers: {'Content-Type': 'text/html'}
};

http.request(options, function(res) {
  var rs = fs.createWriteStream('./test.txt');
  res.pipe(rs);
}).end();

/**
 * 将响应写进可写文件流中。
 */