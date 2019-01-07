var options = {
  cwd: './charpter',
  encoding: 'utf-8',
  timeout: 100,
  maxbuffer: 1024 * 1024,
  killSignal: 'signalkill',
  env: 'development'
}

var options_copy = {};

for(prop in options) {
  options_copy[prop] = options[prop];
}

console.log(options_copy);