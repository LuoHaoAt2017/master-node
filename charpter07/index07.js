var fs = require('fs');
var path = require('path');

var bookPath = path.resolve(__dirname, 'books.txt');
console.log('bookPath', bookPath);

fs.open(bookPath, 'a', function(error, fd) {
  if (error) {throw error;}
  justify(fd);
  fs.close(fd, function(error) {
    console.log(error);
  });
});

fs.open(bookPath, 'a', function(error, fd) {
  if (error) {throw error;}
  justify(fd);
  fs.close(fd, function(error) {
    console.log(error);
  });
});

fs.open(bookPath, 'a', function(error, fd) {
  if (error) {throw error;}
  justify(fd);
  fs.close(fd, function(error) {
    console.log(error);
  });
});

fs.open(bookPath, 'a', function(error, fd) {
  if (error) {throw error;}
  justify(fd);
  fs.close(fd, function(error) {
    console.log(error);
  });
});

function justify(fd) {
  if (fd === 1) {
    console.log('标准输入文件描述符', fd);
  } else if (fd === 2) {
    console.log('标准输出文件描述符', fd);
  } else if (fd === 3) {
    console.log('标准错误文件描述符', fd);
  } else {
    console.log('未知文件描述符', fd);
  }
}