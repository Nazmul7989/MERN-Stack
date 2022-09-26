const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Welcome to Express Js Tutorial');
    res.end();
})

router.get('/register',(req,res)=>{
    // res.sendStatus(200);
    // res.sendStatus(200,{'Content-Type': 'application/json'});
    // res.json({
    //    name : 'Md Nazmul Hasan',
    //    profession: 'Software Developer',
    //    address: 'Jhenaidah, Bangladesh'
    // });

    // res.json({
    //     success: true,
    //     status: 200,
    //     data: "All response data"
    // })

    // res.redirect('/login')

    // res.sendFile(__dirname + "/views/register.html")

    res.end('Register page');


})

router.get('/login',(req,res)=>{
    //Store data in Cookie
    // res.cookie('name','Md Nazmul Hasan');
    // res.cookie('address','Jhenaidah, Bangladesh');
    //Remove data from Cookie
    // res.clearCookie('name')
    // res.clearCookie('address')

    //Send data with Header
    // res.append('name','Md Nazmul Hasan')


    res.end('Login page');
})


module.exports = router