//慢客户端问题的解决
var fs = require('fs');
var path = require('path');
var http = require('http');

var file= path.resolve(__dirname, 'libai.txt');
http.createServer(function(req, res) {
  var readStream = fs.createReadStream(file, {encoding: 'utf-8'});
  readStream.on('data', function(data) {
    var bool = res.write(data);
    if (!bool) {
      console.log('bool', bool);
      readStream.pause();
    }
  });
  res.on('drain', function() {
    //等待流被清空，也就是说缓存的数据被消费了。此时通知可读流可以继续生产了。
    readStream.resume();
  });
  readStream.on('end', function() {
    res.end();
  });
}).listen(8080);

/*
HTTP的response对象就是一个可写入对象，
response.write(data)方法存在返回值，返回值的类型是boolean。
如果将数据写入核缓冲区那么返回true，如果将数据写入内存中队列那么
就返回false。在核缓冲区已满的情况下，就会将数据写入内存中的队列。
因此可以通过write()的返回值就可以判断核缓冲区和否已经满了。
如果满了，那么说明可读写产生的数据快于可写流消费的数据。此时，需要
暂停可读流。通过pause()和resume()方法控制Node进程内存的增长。
*/