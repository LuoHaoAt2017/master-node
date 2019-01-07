var fs = require('fs');
var path = require('path');
var filePath = path.resolve(__dirname, '..', 'charpter08', 'protry.js');

fs.open(filePath, 'r', function(err, fd) {
  if (err) {
    console.log(err);
  }

  var readStream = fs.createReadStream(null, {encoding: 'utf-8',fd: fd});

  readStream.on('data', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});
