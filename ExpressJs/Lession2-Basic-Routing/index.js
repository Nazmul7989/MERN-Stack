const app = require('./app')
const port = 8000;
const host = 'localhost'



app.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`)
})