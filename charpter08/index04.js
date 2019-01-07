var child_process = require('child_process');

var child = child_process.spawn('node', ['index05.js']);

/**
 * 每当子进程将数据输出到标准输出中，
 * 父进程就能够监听到标准输出中的数据，
 * 进而将标准输出中的数据打印到控制台。
 */
process.stdin.resume();

setInterval(() => {
  //父进程向子进程的标准输入流中输入数据
  var number = Math.floor(Math.random() * 100);
  child.stdin.write(number + '\n');
  //父进程从子进程的标准输出流中获取数据
  child.stdout.once('data', function(data) {
    var data = parseInt(data.toString(), 10);
    console.log('send ', number, ' response ', data);
  });
}, 3000);

//10秒后向子进程发送自杀信号，信号的类型是SIGUSR2，关闭子进程。
setTimeout(function() {
  child.kill('SIGUSR2');
}, 1000 * 10);

//父进程监听子进程的错误情况
child.stderr.on('error', function(error) {
  console.log('error data', error);
});
child.stderr.on('data', function(data) {
  console.log('error data', data);
});

//父进程监听子进程的退出情况
child.on('exit', function(code, signal) {
  if (code) {
    console.log('child process exit  because of code = ', code);
  } else if (signal) {
    console.log('child process exit because of signal = ', signal);
  } else {
    console.log('child process exit for unknown exception。');
  }
});

/**
 * 使用child.stdout.once而不是child.stdout.on
 * 在child.stdout上，你应该只能注册一次data事件，
 * 如果使用child.stdout.on那么每隔一秒就在child.stdout
 * 上注册一次事件。那么第一次监听到子进程向标准输出流中输入数据
 * 父进程调用一次，第二次调用两次，第三次调用三次，以此类推。。。
 */