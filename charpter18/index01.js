//console是global全局对象的属性
//console.log()只会输出对象的自有可枚举属性，也就是说
//对象继承自原型链上的属性和不可枚举属性都是无法打印的。

var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();
console.log(eventEmitter);

const person = {name: 'luohao', pass: '123'};
global.console.log(person);