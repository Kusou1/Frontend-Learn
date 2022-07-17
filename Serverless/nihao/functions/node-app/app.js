const express = require('express')
const app = express()

app.use('/users',(req,res)=>{
    res.send('users kusou1')
})


module.exports = app