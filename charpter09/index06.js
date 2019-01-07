//慢客户端问题的解决
var fs = require('fs');
var path = require('path');
var http = require('http');

var file= path.resolve(__dirname, 'libai.txt');
http.createServer(function(req, res) {
  var readStream = fs.createReadStream(file, {encoding: 'utf-8'});
  readStream.pipe(res, {end: false});
  res.on('end', function() {
    console.log('no data to comsume.');
  });
}).listen(8080);

/*
index06是对index05的封装
pipe(target, option);将一切都封装好了，
一旦可写流的消费速度跟不上可读流的生产速度，
就暂停可读流的生产，直到可写流跟上为止。
*/

/**
 * 一旦可读流结束就会默认调用可写流的end方法，我们可以关闭默认功能，
 * 而采用自定义的end方法。此时就可以将end设置为false。
 * 这是次要矛盾。
 */