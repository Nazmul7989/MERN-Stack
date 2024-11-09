const School = require('./school');

const school    = new School();

school.on('bellRing', ({time,message})=> {
    console.log(`It is ${time}, ${message}`);
})

school.schoolClose()


