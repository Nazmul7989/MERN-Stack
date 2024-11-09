const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('alarm', ({time,warning}) => {
    console.log(time, warning);
})


emitter.emit('alarm',{
    time: '6 am now.',
    warning: 'Wake up.',
});
