//阻塞事件循环队列

//事件循环队列的工作机制：
//当前进程从事件循环队列中取出一个事件执行，执行结束以后将处理结果传递给回调函数
//回调函数的执行也即意味着上一个事件处理完毕，当前事件的开始。如此反复，直至队列为空。
//如果在执行某个事件时陷入了死循环，那么事件循环队列中余下的事件就得不到及时的处理，
//甚至导致事件堆积
var counter = 1;

process.nextTick(function() {
  while(true) {
    counter++;
  }
});
setTimeout(function() {
  console.log('event1 handling');
}, 1000);

setTimeout(function() {
  console.log('event2 handling');
}, 2000);