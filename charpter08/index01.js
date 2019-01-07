/**
 * 父进程和子进程之间的通信
 * 
 * 父进程创建子进程
 * 父进程和子进程之间的通信
 * 父进程关闭子进程
 */

var child_process = require('child_process');

var options = {
  cwd: '.',
  encoding: 'utf-8',
  timeout: 1000,
  maxbuffer: 1024 * 1024,
  killSignal: SIGTERM
}

child_process.exec('mkdir hello', options, function(error, stdout, stderr) {
  if (error) {
    console.log('process run encounter a error!', error.code, error.message);
    return;
  }
  console.log('stdout', stdout);
});

/**
 * killSignal = SIGTERM || SIGKILL
 * 父进程在子进程处理超时或者超过输出缓冲区时，可以终止子进程的执行，
 * 终止的形式就是向子进程发送信号，不同种类的信号代表了子进程不同的退出方式。
 */