const http = require('http');

// http.createServer((req,res)=>{
//     res.end()
// }).listen(8000)

const server = http.createServer((req,res)=>{
    res.end('Your Server is running in localhost:8000')
})

server.listen(8000);