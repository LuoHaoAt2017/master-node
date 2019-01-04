
var fs = require('fs');
var path = require('path');

//判断一个文件是否存在
fs.exists('aaa/bbb', function(isExists) {
  console.log('isExists', isExists);
});

fs.exists(__filename, function(isExists) {
  console.log('isExists', isExists);
});