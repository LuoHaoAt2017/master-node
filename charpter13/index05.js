var http = require('http');

http.createServer(function(req, res) {
  //console.log('cookies', cookies);
  var url = req.url.trim();
  var method = req.method;
  var headers = req.headers;
  var index = url.indexOf('?');
  if (index != -1) {
    url = url.substring(0, index);
  }
  if (url === '/redirect') {
    res.writeHead(301, 'source removed permanent!', {Location: '/home'});
    res.end();
  } else if (url === '/home') {
    var body = '';
    req.on('data', function(chunk) {
      body = body + chunk;
    });
    req.on('end', function() {
      res.writeHead(200, 'OK');
      res.end(JSON.stringify(body));
    });
  } else {
    res.writeHead(500, 'server error');
    res.end(JSON.stringify({
      'warning': 'memory leak.'
    }));
  }
}).listen(4000, 'localhost', function() {
  console.log('server is listening on port 4000 of 127.0.0.1');
});

/**
 * 请求头先于请求体，因为请求体的数据量要大，存在比较长的时延。
 */