const express = require('express');

const app = express();

app.get( '/' , ( req , res ) => {
    res.send("The express server is sending response");
});

app.get('/add',(req,res)=>{
    let {a:first,b:sec} = req.query;
    let sum = parseInt(first) + parseInt(sec);
    res.send({ sum });
})

app.listen('3000' , ()=>{
    console.log("Server Started...");
})