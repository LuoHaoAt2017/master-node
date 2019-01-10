/**
 * 使用request第三方模块
 */
var request = require('request');
var fs = require('fs');

var options = {
  url: 'http://localhost:4000/home',
  method: 'GET',
  headers: {'Author': 'luohao'},  //自定义请求头。
  timeout: 3000,                  //等待服务器做出响应的最长等待时间。
  maxRedirects: 3,                //避免陷入死循环，设置重定向的最大次数。
  followRedirect: true,           //开启追随重定向，服务器返回301，客户端自动重定向。
  qs: {'page': 2, 'size': 4},     //在url后附加查询参数。
  //form: {'color': 'red'},         //使用表单编码对请求主体进行编码。
  json: {'tree': 'apple'},         //使用json对请求体中的部分数据进行编码。
  jar: request.jar(),                     //关闭向服务器发送cookies的功能
}

request(options, function(err, res, body) {
  if (err) {throw err;}
  var response = {
    code: res.statusCode,
    message: res.statusMessage,
    body: body && JSON.parse(body)
  }
  console.log('response ', response);
});

var file = fs.createWriteStream('./test.txt');
//stream.pipe()
request.post('https://www.jiumodiary.com').pipe(file);
//将请求结果(可读流)写进文件可写流中

var cookies = request.jar();
console.log('cookies', cookies);