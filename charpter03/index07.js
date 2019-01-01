//var hello0 = require('index06');
var hello1 = require('./index06');
var hello2 = require('./index06');

//模块初始化只执行一次

//对于非核心模块的加载必须使用相对路径或者绝对路径
//hello0是采用文件名加载非核心模块，那么node会去
//当前node_modules或者父文件夹的node_modules中去查找。
//不幸的是在各层级的node_modules中都没有找到index06.js。

//node没有全局对象，JavaScript有全局对象。
//node组织代码的方式是模块化，commonJS。