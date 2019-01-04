//文件的基本处理
//文件的打开，文件的读取，文件的写入，文件的关闭
//文件描述符：标准输入文件，标准输出文件和标准错误文件。

var path = require('path');
var file_path = '/c:/software/javascript/node/program.pdf';

//获取文件路径的目录名
var file_dirname = path.dirname(file_path);
console.log('dirname', file_dirname);

//获取文件路径的文件名
var file_name = path.basename(file_path);
console.log('file name', file_name);

//获取文件的后缀名
var suffix_name = path.extname(file_path);
console.log('suffix name', suffix_name);

file_name = path.basename(file_path, suffix_name);
console.log('file name', file_name);