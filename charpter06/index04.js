(function schedule() {
  setTimeout(function() {
    console.log('$$$$$$');
    
    setTimeout(function network() {
      console.log('@@@@@@');
      schedule();
    }, 3000);
  }, 1000);
}());