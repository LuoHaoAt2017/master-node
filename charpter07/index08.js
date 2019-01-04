var fs = require('fs');
var path = require('path');

var bookPath = path.resolve(__dirname, 'books.txt');
console.log('bookPath', bookPath);

fs.open(bookPath, 'a', function(error, fd) {
  if (error) {throw error;}
  var buffer = Buffer.alloc(1024, 'I have a apple!\n', 'utf-8');
  var bufferOffset = 0, bufferLength = 0, filePosition = 100;
  justify(fd);
  fs.read(
    fd, buffer, 
    bufferOffset, 
    bufferLength, 
    filePosition, 
    function read(error, bytes) {
      if (error) {throw error;}
      console.log('just read ', bytes, ' bytes!');
      if (bytes > 0) {
        console.log(buffer.slice(0, bytes).toString());
      }
      fs.close(fd, function(error) {
        if (error) {
          console.log('pop error when close', error);
        } else {
          console.log('close successfully');
        }
      });
    });
});

fs.open(bookPath, 'a', function(error, fd) {
  if (error) {throw error;}
  var buffer = Buffer.alloc(128, 'I have a dream!\n', 'utf-8');
  justify(fd);
  fs.write(fd, buffer, function written(error, bytes) {
    if (error) {throw error;}
    console.log('just write ', bytes, ' bytes!');
    fs.close(fd, function(error) {
      if (error) {
        console.log('pop error when close', error);
      } else {
        console.log('close successfully');
      }
    });
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