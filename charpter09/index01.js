/*
可读流
可写流

可读流和可写流是一种抽象的概念
通过具体的对象去实现

从可读流中读取数据
向可写流中写入数据

暂停流
恢复流

监听流
流有数据时得到通知
流暂停时也得到通知


var Stream = require('stream');

var readable_stream_one = new Stream();
readable_stream_one.on('data', function(data) {
  console.log('readable_stream_one', data);
});

var readable_stream_two = new Stream();
readable_stream_two.setEncoding('utf-8');
readable_stream_two.on('data', function(data) {
  console.log('readable_stream_two', data);
});

//不再接收data事件
readable_stream_one.pause();
//当暂停一个文件流时就停止从该流读取数据
//当暂停一个TCP套接字时就停止接收数据包

//恢复流
readable_stream_one.resume();

//通过文件可读流传输数据时，抵达文件结尾时。
//文件可读流就会发送end事件。在定义的时候，
//你就应该监听这个流的end事件，当流结束时
//应该做处理，比如关闭流。

readable_stream_one.on('drain', function() {

});

*/