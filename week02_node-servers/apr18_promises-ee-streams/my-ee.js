const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('banana', () => {
    console.log('omg, a banana event!');
});

ee.emit('banana');

ee.emit('mango');


