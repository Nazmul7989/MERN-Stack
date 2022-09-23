const express = require('express');
const router = require('./routes/router')
const userRouter = require('./routes/users.route')
const app = express();

app.use(router)
app.use('/api/user',userRouter)

module.exports = app;
