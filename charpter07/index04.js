var path = require('path');

//将多个路径解析成一个绝对路径

var relative_path = "";

relative_path = path.relative('/aaa/bbb/xxx/yyy', '/aaa/bbb/rrr/ttt');
console.log('relative_path', relative_path);

relative_path = path.relative('/aaa/bbb/xxx/yyy', 'aaa/bbb/rrr/ttt');
console.log('relative_path', relative_path);