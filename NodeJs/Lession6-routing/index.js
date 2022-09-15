const http = require('http');
const fs = require('fs');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{

    const redirectHandler = (statusCode,fileName)=>{
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(statusCode,{'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/'){
        redirectHandler(200,'./views/Home.html')
    }else if (req.url === '/about'){
        redirectHandler(200,'./views/About.html')
    }else if (req.url === '/contact'){
        redirectHandler(200,'./views/Contact.html')
    }else {
        redirectHandler(404,'./views/Error.html')
    }


})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})