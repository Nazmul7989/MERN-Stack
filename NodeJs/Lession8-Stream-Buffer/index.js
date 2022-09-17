const fs = require('fs');


    // const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
    // readStream.on('data',(chuck)=>{
    //     console.log(chuck.toString())
    //
    // })

    const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8')

    readStream.on('data',(data)=>{
        console.log(data)
    })


