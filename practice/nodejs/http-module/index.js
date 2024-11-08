const http = require('http');
const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    // res.setEncoding('utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.end();
    // res.end('<h1>Hello, i am from nodejs</h1>');
});

server.listen(port, host,()=> {
    console.log(`Server started at http://${host}:${ port }`);
});