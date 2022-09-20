const EventEmitter = require('events');

class Routine extends EventEmitter{

    wakeup = ()=>{
        console.log('I am from Wake up function')
        this.emit('alarm',{
            warning: 'Hurry up.',
            time: 'It is 7 am.'
        })
    }

}


module.exports = Routine