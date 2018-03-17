var util = require('util');
function Person() {
  this.name = 'Tom';
  this.toString = function () {
    return this.name;
  }
}

var obj = new Person();
console.info(util.inspect(obj));
console.info(util.inspect(obj,true));

console.info('isArray:'+util.isArray([]));
console.info('isArray:'+util.isArray(new Array));
console.info('isArray:'+util.isArray({}));

console.info('isRegExp:'+util.isRegExp(/some regexp/));
console.info('isRegExp:'+util.isRegExp(new RegExp('another regexp')));
console.info('isRegExp:'+util.isRegExp({}));

console.info('isDate:'+util.isDate(Date()));
console.info('isDate:'+util.isDate(new Date()));
console.info('isDate:'+util.isDate({}));