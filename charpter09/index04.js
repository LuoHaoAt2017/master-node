//慢客户端问题
var fs = require('fs');
var path = require('path');
var http = require('http');

var file= path.resolve(__dirname, 'libai.txt');
http.createServer(function(req, res) {
  var readStream = fs.createReadStream(file, {encoding: 'utf-8'});
  readStream.on('data', function(data) {
    res.write(data);
  });
  readStream.on('end', function() {
    res.end();
  });
}).listen(8080);

/**
 * 可读流是本地文件流，因此比较快。
 * 但是可写流需要通过网络，如果网速很慢，
 * 那么可写流就会很慢。这就是慢速客户端问题产生的场景。
 * 
 * 换一个角度：可读流是生产者，可写流是消费者。
 * 从可读流中读取数据超快，也就是生产旺盛。
 * 但是由于网络原因，向可写流中写入数据超慢，也就是消费疲软。
 * 这就导致产能过剩。Node天生的I/O非阻塞特性使得它能够同时处理
 * 大量的I/O，大量的I/O由于网络原因无法得到及时处理，就会将从
 * 可读流中读取的数据缓存起来。write函数缓存的地点是内存。
 * 这就十分尴尬，一旦内存满了，系统就JJ了。这就是内存增长问题。
 * 为了解决内存增长问题必须暂停生产者的生产工作。这就是之前说到的
 * 暂停可读流方法的作用。等到过剩的产能被消费者消费到合适的时候，
 * 在恢复可读流的操作。从这个角度来看暂停和恢复方法才会觉得它们的好。
 */