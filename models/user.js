var mongoose = require('mongoose');

//const router = require("express").Router();

router.get("/usertest",(req, res) => {
  res.send("user test is successfull")
});

router.post("userposttest",(req,res) => {
const username = req.body.username
res.send("your username is:" +username);
});

module.exports = router;

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    token: String
  });
  
module.exports = mongoose.model('user', userSchema);