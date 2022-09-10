const http = require('http');
const host = '127.0.0.1';
const port = 8000;

// http.createServer((req,res)=>{
//     res.end()
// }).listen(8000)

//
// const server = http.createServer((req,res)=>{
//     res.end("<h3>Your Server is running in localhost:8000</h3>")
// })
//
// server.listen(port,host, ()=>{
//  console.log(`Server is running successfully at http://${host}:${port}`)
// });



const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("<h3>Your Server is running in localhost:8000</h3>")
    res.end()
})

server.listen(port,host, ()=>{
    console.log(`Server is running successfully at http://${host}:${port}`)
});
