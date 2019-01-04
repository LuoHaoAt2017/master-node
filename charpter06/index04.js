//使用setTimeout代替setInterval强制函数串行顺序执行
(function schedule() {
  setTimeout(function() {
    console.log('$$$$$$');
    
    setTimeout(function network() {
      console.log('@@@@@@');
      schedule();
    }, 3000);

  }, 1000);
}());