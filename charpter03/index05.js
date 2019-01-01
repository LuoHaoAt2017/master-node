//一个十分有意思的话题：
//如果通过模块名称引用一个模块test，但是这个test既不是核心模块，也不是相对路径文件
//那么，node就会去当前路径的node_modules文件夹下面去寻找test。如果，当前路径下
//没有node_modules/test.js，那么就去父路径的node_modules下面去寻找，依次上溯。
var test = require('test');
console.log(test.xxx);
var hello = require('hello');
console.log(hello.say);