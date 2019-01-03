//CPS风格 后继传递风格

//当需要在请求完成后继续获取控制权可以使用CPS风格
//当事件可能发生多次时应该使用事件发射器模式

var http = require('http');

var options = {
  url: '',
  data: {},
  method: 'GET'
}

var request = http.request(options, function(response) {
  response.on('data', function(data) {
    console.log('data from server ', data);
  });

  response.on('end', function() {
    console.log('a request over!');
  });
});

request.end();

//response就是响应对象，同时也是事件发射器
//response可以发射data或者end事件

//事件具有类型
//事件发生时，比如click,事件监听器就会去处理。