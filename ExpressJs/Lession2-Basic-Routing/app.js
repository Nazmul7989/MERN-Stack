const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('This is Express js get request');
    res.end();
})

app.post('/',(req,res)=>{
    res.send('This is Express js post request');
    res.end();
})

app.put('/',(req,res)=>{
    res.send('This is Express js put request');
    res.end();
})

app.patch('/',(req,res)=>{
    res.send('This is Express js patch request');
    res.end();
})

app.delete('/',(req,res)=>{
    res.send('This is Express js delete request');
    res.end();
})

module.exports = app;
