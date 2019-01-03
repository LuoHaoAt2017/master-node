//自定义事件监听器

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyClass = function() {}
util.inherits(MyClass, EventEmitter);

MyClass.prototype.someMethod = function() {
  this.emit("custom event", 'parameter1', 'parameter2');
}

var instance = new MyClass();
instance.on('custom event', function(param1, param2) {
  console.log('I have got message: ', param1, param2);
});

instance.someMethod();