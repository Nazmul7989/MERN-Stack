const Routine = require('./routine')

const routine = new Routine();

//set listener for the raised event
routine.on('alarm',function ({warning, time}){
    console.log(`${warning} ${time}Wake up.`)
})

routine.wakeup();

