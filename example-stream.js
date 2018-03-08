var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('./data/example-stream.txt');

readerStream.setEncoding('UTF8');

// 当数据可读时
readerStream.on('data',function(chunk) {
  data +=chunk;
  console.info('没有数据时：'+data);
});

// 没有更多的数据可读时触发
readerStream.on('end',function () {
  console.info('没有更多的数据时：'+data);
});

// 在接收和写入过程中发生错误时触发
readerStream.on('error',function(err) {
  console.info('出现错误时：'+err.stack);
});

console.info('task done');


