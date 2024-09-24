const express = require("express");
const app = express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const userRouters = require("./routes/user");

// Load environment variables from .env file
dotenv.config();


connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRouters);

app.get("/", function(req,res){
    res.send("hi");
})

const port = 3000;

app.listen(port,function(){
    console.log("Server is running");
})

//mongodb+srv://sushantgadyal19:plati19@cluster0.9dgoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0