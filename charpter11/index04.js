var fs = require('fs');

var readStream = fs.createReadStream('./test.mp4');

process.stdout.write(readStream);