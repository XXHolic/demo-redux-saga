var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./data/zip-example-callback.gz')
    .pipe(zlib.createGzip()).pipe(fs.createWriteStream('./data/zip-example-callback.txt'));
// 这种解压后文件时编码的
console.info('解压文件完成');


