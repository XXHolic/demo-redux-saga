var fs = require('fs');
var data = '1happy happy1';

// 如果没有这个文件，则会创建新的文件
var writeStream = fs.createWriteStream('./data/example-stream2.txt');

// 会把已有的值清除掉
writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish', function() {
  console.info('写入完成');
});

writeStream.on('error', function(err) {
  console.info(err.stack);
});

console.info('task done');

