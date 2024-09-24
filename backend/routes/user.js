const express = require("express");
const router = express.Router();

const {loginUser,signupUser} = require("../controller/userController");

router.get("/login", loginUser);

router.get("/signup", signupUser);

module.exports = router;