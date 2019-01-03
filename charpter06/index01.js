

var handle1 = setTimeout(function func1() {
  console.log('func1 run');
  clearTimeout(handle2);
}, 2000);

var handle2 = setTimeout(function func2() {
  console.log('func2 run');
}, 4000);

var handle3 = setInterval(function func3() {
  console.log('I master JavaScript!');
}, 1000);

var handle4 = setTimeout(function func3() {
  clearInterval(handle3);
}, 9000);

process.nextTick(function() {
  console.log('I have a pen. I have a apple.');
});