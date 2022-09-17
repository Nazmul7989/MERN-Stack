const fs = require('fs');
const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type': 'text/html'});

    if (req.url === '/'){
        fs.readFile(`${__dirname}/form.html`,'utf8',(err,data)=>{
            res.write(data)
            res.end();
        })
    }else  if (req.url === '/process' && req.method === 'POST'){

        const body = [];

        req.on('data',(chuck)=>{
            body.push(chuck);
        })

        req.on('end',()=>{
            res.write('Data Streaming successfully'+ '<br>')
            let parseData = Buffer.concat(body).toString()
            res.write('<p>'+parseData+'</p>>')
            res.write('Thanks for submitting')
            res.end();
        })

    }else {
        res.write('404 Not Found!')
        res.end();
    }




})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})