var fs = require('fs');
var readStream = new fs.ReadStream();

function eventListener1(data) {
  console.log('received data from server ', data);
}

function eventListener2(data) {
  console.log('received data from server ', data);
}

readStream.on('data', eventListener1);

readStream.on('data', eventListener2);

/**
 * readStream是事件发射器
 * data是事件类型
 * eventListener1和eventListener2是事件监听器
 * 
 * 场景描述：
 * 在同一个事件发射器的同一事件上注册了不同的事件监听器。
 */

//在事件发射器readStream上注销监听data事件的事件监听器eventListener1
//那么随后readStream再次发射data事件时，事件监听器eventListener1就不会执行。
readStream.removeListener('data', eventListener1);

//如果只对某个类型的事件第一次感兴趣可以使用once()函数注册事件和事件监听器。
readStream.once('open', function() {
  console.log('readStream is open');
});

//关闭事件发生器上的某个特定类型事件上注册的所有事件监听器
readStream.removeAllListeners('data');

