var path = require('path');
var fs = require('fs');

var filePath = path.resolve(__dirname, 'libai.txt');

var readStream = fs.createReadStream(filePath, {
  encoding: 'utf-8',
  mode: 777,
  start: 0,
  end: 124
});

readStream.on('data', function(data) {
  console.log(data);
});

/**
 * 对于服务器来说，HTTP请求对象是可读流，HTTP响应对象是可写流。
 */