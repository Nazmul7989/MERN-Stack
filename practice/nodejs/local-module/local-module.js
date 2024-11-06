// exports.name = ()=> {
//     return 'Md Nazmul Hasan';
// }

const name = ()=> {
    return 'Md Nazmul Hasan';
}

const age = ()=> {
    return '32';
}

const academy = ()=> {
    return 'University of Rajshahi';
}


// exports.name = name();

module.exports = {
    name,
    age,
    academy
}

