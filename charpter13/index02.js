var http = require('http');

var options = {
  host: 'www.baidu.com',
  port: 80,
  path: './index.html',
  method: 'GET',
  headers: {'Content-Type': 'text/html'}
};

//request方法的第二个参数就是监听response事件
var request = http.request(options);

request.on('response', function(res) {
  res.setEncoding('utf-8');
  res.on('data', function(chunk) {
    console.log('chunk', chunk);
  });
});
//请求主体通过write写进request
request.write('I have a Apple.');
request.end();

/**
 * request是一个可写流
 */