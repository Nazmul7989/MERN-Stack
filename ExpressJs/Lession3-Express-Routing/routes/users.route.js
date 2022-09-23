const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.send('This is Login Page');
    res.end();
})

router.get('/register',(req,res)=>{
    res.send('This is Register Page');
    res.end();
})



module.exports = router