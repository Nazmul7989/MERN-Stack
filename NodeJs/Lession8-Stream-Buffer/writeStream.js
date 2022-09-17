// const fs = require('fs');
//
// const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
// const writeStream = fs.createWriteStream(`${__dirname}/output.txt`)
//
// // readStream.on('data',(chunk)=>{
// //     writeStream.write(chunk)
// // })
//
// readStream.pipe(writeStream)

const fs = require('fs');
const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type': 'text/html'});

    const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8')

    readStream.pipe(res)

})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})


