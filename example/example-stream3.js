var fs = require('fs');

var readerStream = fs.createReadStream('./data/example-callback.txt');

var writerStream = fs.createWriteStream('./data/example-stream2.txt');

readerStream.pipe(writerStream);

console.info('task done');

