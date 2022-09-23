const express = require('express');
const router = express();

router.get('/',(req,res)=>{
    res.send('Welcome to Express Js Tutorial');
    res.end();
})

router.get('/about',(req,res)=>{
    res.send('This is About Page');
    res.end();
})

router.get('/contact',(req,res)=>{
    res.send('This is Contact Page');
    res.end();
})


module.exports = router