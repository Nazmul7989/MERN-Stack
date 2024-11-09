const EventEmitter = require('events');

class School extends EventEmitter {
    schoolClose() {
        this.emit('bellRing',{
            time: '4 pm',
            message: 'School Closed'
        })
    }
}

module.exports = School;