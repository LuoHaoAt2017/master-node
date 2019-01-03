function style(obj, func) {
  obj.x = 1;
  func(obj);
}

var person = {x: 0, y: 0};
style(person, function(obj) {
  obj.x++;
});

console.log('person', person);

//标准的回调模式

/*
异步编程并不以函数返回值作为函数结束的标志
而是以一个回调函数作为结束的标志
这就是后继传递风格
*/

/*
如果纯粹看style的调用过程而不看style的定义过程
那么无法得到obj参数是从哪里来的
obj就是上一次调用的结果当作此次回调的参数
*/