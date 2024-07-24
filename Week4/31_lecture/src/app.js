const http = require('http');

const server = http.createServer( ( req , res ) => {
    res.write("The http node server is working correctly");
    res.end();
})

server.listen('3000',()=>{
    console.log("Server Started....");
})