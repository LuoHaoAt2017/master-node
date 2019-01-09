var http = require('http');
var spawn = require('child_process').spawn;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'video/mp4'});
  var child = spawn('node', ['./index04.js']);
  child.stdout.pipe(res);
  res.on('end', function() {
    child.kill();
  });
}).listen(4000, 'localhost');

server.on('close', function() {
  console.log('server closed!');
});

//Transfer-Encoding: chunked
//以块的形式传输数据。
//注意在传输从子进程获取的输出时并没有指定输出流的大小。
//因为Node允许以流的形式传输HTTP分块响应。所以才能够在
//响应头中看到Transfer-Encoding: chunked