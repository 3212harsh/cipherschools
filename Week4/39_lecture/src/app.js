const express = require('express');
const Task = require('./models/Task')

const app = express();

app.get( '/' , ( req , res ) => {
    res.send("The express server is sending response");
});

app.post("/add-task" , async ( req , res ) => {
    const task = new Task({title: "test task",description: "test task desc"});
    await task.save();
    return res.status(200).send({mess:"Saved"});
})

app.get('/add',(req,res)=>{
    let {a:first,b:sec} = req.query;
    let sum = parseInt(first) + parseInt(sec);
    res.send({ sum });
})

app.listen('3000' , ()=>{
    console.log("Server Started...");
})