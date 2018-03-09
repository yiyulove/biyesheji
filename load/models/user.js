
var mongoose = require("../db");
var userSchema=new mongoose.Schema({
  userName:String,
  userPwd:String
})

var u=mongoose.model(
  'load',
  userSchema
)
module.exports=u;  