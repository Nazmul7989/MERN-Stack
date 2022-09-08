// exports.name = ()=>{
//     return 'Md Nazmul Hasan';
// }

const name = ()=>{
    return 'Md Nazmul Hasan';
}


const address = ()=>{
    return 'Jhenaidah';
}

const age = 29;

const education = ()=>{
    return 'MBA from Rajshahi University';
}

// exports.name = name();
// exports.address = address();
// exports.age = age;
// exports.education = education()

module.exports = {
    name,
    age,
    address,
    education
}