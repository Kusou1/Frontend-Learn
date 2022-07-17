const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./router/index");
const todoRouter = require("./router/todo");

app.use("/", indexRouter);
app.use("/todo", todoRouter);

// app.use('/users',(req,res)=>{
//     res.send('users kusou1')
// })

module.exports = app;
