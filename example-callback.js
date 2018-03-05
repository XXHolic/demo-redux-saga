var fs = require('fs');
var data = fs.readFileSync('data/example-callback.txt');
console.info(data.toString());
console.info("task done");

fs.readFile('data/example-callback.txt',function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.info('异步取数据：'+data.toString());
});

// console.info(data.toString());
console.info("sync task done");
