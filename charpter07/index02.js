var path = require('path');
var file_path = "";

file_path = path.join('foo', 'bar', 'baz/asdf', 'quux');
console.log(file_path);

file_path = path.join('/foo', 'bar', 'baz/asdf', 'quux');
console.log(file_path);

file_path = path.join('foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(file_path);
