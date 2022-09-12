const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.end('Welcome to Node js Routing and Nodemon Practice Class')
})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})