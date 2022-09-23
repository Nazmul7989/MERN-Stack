const express = require('express');
const port = 8000;
const host = 'localhost'
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to Express Js Tutorial');
    res.end();
})


app.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`)
})