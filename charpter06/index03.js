//使用setTimeout代替setInterval强制函数串行顺序执行

setInterval(function() {
  console.log('+++++');
  newWork();
}, 1000);

function newWork() {
  setTimeout(function() {
    console.log('-----');
  }, 3000); 
}


//预期：每隔一秒钟打印一次+++++和一次-----
//+++++和-----交替执行。但是实际不是这样的
//本次的newWork可能会和下一次的setInterval同时执行

//必须确保本次的newWork一定要先于下一次tick，、
//
(function schedule() {
  setTimeout(function() {
    console.log('$$$$$$');
    setTimeout(function() {
      console.log('@@@@@@');
      schedule();
    }, 3000);
  }, 1000);
}());