const http = require('http')
const port = 3000
const host = 'localhost'

const server = http.createServer((req, res) => {
    res.end('Practicing nodejs external module')
})

server.listen(port, host,()=> {
    console.log(`Server started at http://${host}:${ port }`);
})