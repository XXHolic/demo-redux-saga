const fs = require('fs');
const child_process = require('child_process');

for(var i =0; i<3;i++) {
  var workerProcess = child_process.exec('node support.js '+ i,function (error, stdout, stderr) {
    if (error) {
      console.info()
    }
  })
}