const express = require('express')
const app =express();
require('dotenv').config();
const mongoose = require('mongoose')

app.get('/',(req,res)=>{
    res.send("First Node backend")
});

// CONNECT DATABASE
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log('DB Connetced'))
.catch((err)=> console.log(err));

const port= process.env.port || 9005;

app.listen(port,()=>{
    console.log(port);
});