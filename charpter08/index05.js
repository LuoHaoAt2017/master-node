//标准输入流默认是暂停的，在使用stdin之前首先恢复。
process.stdin.resume();

process.stdin.on('data', function(data) {
  var number = 0;
  try {
    number = parseInt(data.toString(), 10);
    number++;
    process.stdout.write(number + '\n');
  } catch (error) {
    process.stderr.write(error + '\n');
  }
});

process.on('SIGUSR2', function() {
  console.log('plants vs the dead');
});