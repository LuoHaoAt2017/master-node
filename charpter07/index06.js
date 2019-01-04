//文件路径的操作对象path
//文件读取打开关闭的操作对象是fs

var fs = require('fs');

//fs.stat将stats类的一个实例传递给回调函数
fs.stat('./books.txt', function(error, stats) {
  if (error) {throw error;}
  if (stats.isFile()) {
    console.log('这是一个文件');
  } else if (stats.isDirectory()) {
    console.log('这是一个目录');
  }
});