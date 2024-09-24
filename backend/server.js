const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("hi");
})

const port = 3000;

app.listen(port,function(){
    console.log("Server is running");
})