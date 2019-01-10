var http = require('http');

var options = {
  host: 'www.baidu.com',
  port: 80,
  path: './index.html',
  method: 'GET',
  headers: {'Content-Type': 'text/html'}
};

var request = http.request(options, function (res) {
  console.log('Code', res.statusCode, 'Location', res.headers.location);
  res.setEncoding('utf-8');
});

//请求主体通过write写进request
request.write('I have a Apple.');
request.end();

/**
 * request是一个可写流
 */