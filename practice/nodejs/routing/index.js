const http = require("http");
const fs = require("fs");

const port = 3000;
const host = 'localhost';

const getServerInfo = (path, res)=> {
    fs.readFile(path, (err, data) => {
        if (err){
            console.error(err);
        }else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write(data);
            res.end();
        }
    })
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        getServerInfo('./views/home.html', res);
    }else if(req.url === '/about'){
        getServerInfo('./views/about.html', res);
    }else if(req.url === '/contact'){
        getServerInfo('./views/contact.html', res);
    }else {
        getServerInfo('./views/404.html', res);
    }
})

server.listen(port, host, ()=> {
    console.log(`Server started at http://${host}:${ port }`);
});