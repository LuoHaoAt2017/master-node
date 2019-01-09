/**
 * 一旦由于网络原因，连接中断。那么需要重新连接。可以设置周期性地重新连接。
 * 但是如果连接的次数超过上限,那么很有可能是永久性故障，比如服务器挂了。
 * 此时应该终止连接。避免网络中有过多请求。如果控制台输入quit，
 * 那么确实想要结束连接，因此就不必尝试重新连接。
 */

var net = require('net');
var IntervalTime = 3000, MaxTimes = 5, times = 1;
var restartFlag = true;

(function connect() {

  var connection = net.createConnection(4001, function() {
    console.log('customer is listening at 4001');
  });

  process.stdin.on('data', function(data) {
    var words = data.toString().trim();
    if ( words == 'quit') {
      console.log('get quit command');
      restartFlag = false;
      connection.end();
    } else {
      connection.write(words + '\n');
    }
  });
  
  connection.once('connect', function() {
    console.log('connected');
  });
  
  connection.on('data', function(data) {
    console.log(data.toString().trim());
  });

  connection.on('error', function(err) {
    console.log('error message ', err.message, ' code ', err.code);
    reconnect();
  });

  connection.on('end', function() {
    process.stdin.pause();
    console.log('communication is over!');
  });

  connection.on('close', function() {
    restartFlag && reconnect();
  });

  function reconnect() {
    if (times >= MaxTimes) return;
    console.log('reconnect after 3s.');
    setTimeout(function() {
      connect();
      times++;
    }, IntervalTime);
  }
}())