
const url = require('url');
const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{

    var myUrl = "http://localhost:8000/blog.js?year=2022&month=September";

    var urlObject = url.parse(myUrl,true);

    res.writeHead(200,{"Content-Type": "text/html"})
    res.write("URL: " + urlObject.href + '<br>');
    res.write("Protocol: " + urlObject.protocol + '<br>');
    res.write("Hostname: " + urlObject.hostname + '<br>');
    res.write("Port: " + urlObject.port + '<br>');
    res.write("Host: " + urlObject.host + '<br>');
    res.write("Path: " + urlObject.path + '<br>');
    res.write("Pathname: " + urlObject.pathname + '<br>');
    res.write("Search: " + urlObject.search + '<br>');
    res.write("QueryParams-Year: " + urlObject.query.year + '<br>');
    res.write("QueryParams-Month: " + urlObject.query.month + '<br>');

    res.end();
})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})