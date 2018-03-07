var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
  console.info('监听器 listener1执行');
};

var listener2 = function listener2() {
  console.info('监听器 listener2执行');
};

// 绑定connection事件
eventEmitter.addListener('connection',listener1);
eventEmitter.addListener('connection',listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.info(eventListeners + '个监听器监听连接事件');

eventEmitter.emit('connection');

// 移除监听器
eventEmitter.removeListener('connection', listener1);
console.info('listener1 不受监听');

eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.info(eventListeners + '个监听器监听连接事件');

console.info('task done');