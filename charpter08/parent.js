var child_process = require('child_process');
var options = { env: {number: 124, words: 'I love JavaScript.'}};
child_process.exec('node ./children.js', options, function callback(error, stdout, stderr) {
  if (error) {
    console.log('process encounter a error!');
  }
  console.log('stdout: ', stdout);
  console.log('stderr: ', stderr);
});

/**
 * 通过child_process.exec启动子进程，并且通过options向子进程传递参数
 * 子进程执行完毕后，调用回调函数callback
 * 
 * 通过child_process.exec启动子进程的局限性是父进程和子进程之间无法通信。
 * 父进程向子进程传递数据的唯一方式是通过环境变量dev。子进程通过process.env.[prop]
 * 获取父进程传递进来的参数，这明显制约了父进程对子进程的控制。
 */