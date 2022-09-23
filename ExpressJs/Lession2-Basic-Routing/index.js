const app = require('./app')
const port = 8000;
const host = 'localhost'


app.use((req, res) => {
    res.send('404! Not Found.')
    res.end();
})

app.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`)
})