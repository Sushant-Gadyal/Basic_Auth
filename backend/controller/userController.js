const User = require("../models/userModel");

//login
const loginUser = async(req,res)=>{
    console.log("Login came");

}

const signupUser = async(req,res)=>{
    console.log("signup came");
}

module.exports = {loginUser,signupUser};