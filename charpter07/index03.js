var path = require('path');

//将多个路径解析成一个绝对路径

var file_path = "";

file_path = path.resolve('/aaa', './bbb', 'ccc', 'index.txt');
console.log('file_path', file_path);

file_path = path.resolve('/aaa', '/bbb', 'ccc', 'index.txt');
console.log('file_path', file_path);

file_path = path.resolve('/aaa', 'bbb', 'ccc', '..', 'index.txt');
console.log('file_path', file_path);

file_path = path.resolve('aaa', './bbb', 'ccc', 'index.txt');
console.log('file_path', file_path);

