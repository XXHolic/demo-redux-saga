const fs = require('fs');
const child_process = require('child_process');

for(var i =0; i<3;i++) {
  var workerProcess = child_process.exec('node example-exec-support.js '+ i,function (error, stdout, stderr) {
    if (error) {
      console.info('Error code:'+error.code);
      console.info('Signal recived:'+error.signal);
    }
    console.log('stdout:'+stdout);
    console.log('stderr:'+stderr);
  });

  workerProcess.on('exit',function (code) {
    console.log('子进程已退出,退出码为：'+code);
  })
}