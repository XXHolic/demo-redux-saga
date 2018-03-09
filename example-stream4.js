var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./data/example-callback.txt')
    .pipe(zlib.createGzip()).pipe(fs.createWriteStream('./data/zip-example-callback.gz'));

console.info('压缩文件完成');

fs.createReadStream('./data/zip-example-callback.gz')


