var child_process = require('child_process');

var env = process.env;
var child_env = {}

for(prop in env) {
  child_env[prop] = env[prop];
}

var options = {
  env: child_env,
  encoding: 'utf-8'
};


child_process.exec('echo hello', options, function(error, stdout, stderr) {
  if (error) {
    console.log('process encounter a error!');
  }
  console.log('stdout', stdout);
});