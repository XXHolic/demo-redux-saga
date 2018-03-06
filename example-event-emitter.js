

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function() {
  console.info('some_event事件触发了');
});

setTimeout(function () {
  event.emit('some_event');
});



var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1, arg2) {
  console.info('listener2', arg1, arg2);
});
emitter.on('someEvent',function(arg1, arg2) {
  console.info('listener1', arg1, arg2);
});

emitter.emit('someEvent', 'ar1参数', 'arg2参数');