const EventEmitter = require('events');

const emitter = new EventEmitter();

//set listener for the raised event

//Receiving single argument
// emitter.on('alarm',function (time){
//     console.log(`${time}Wake up.`)
// })


//Receiving multiple argument
emitter.on('alarm',function ({warning, time}){
    console.log(`${warning} ${time}Wake up.`)
})


//Raise an event

//passing single argument with event
// emitter.emit('alarm','It is 7 am.')

//passing multiple argument with event
emitter.emit('alarm',{
    warning: 'Hurry up.',
    time: 'It is 7 am.'
})