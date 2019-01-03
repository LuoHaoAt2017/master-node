var events = require('events');
var eventEmitter = new (events.EventEmitter)();

eventEmitter.emit('click');
eventEmitter.emit('error', new Error('I have a pen'));