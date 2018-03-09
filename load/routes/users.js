var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var user=require("../models/user");
router.get('/login',function(req,res,next){
  user.find({},function(drr,data){
    res.json(data);
  })
})



var user=require("../models/user");
router.post('/login', function(req, res, next) {
  var userName=req.body.userName
  var userPwd=req.body.userPwd
  user.findOne({},function(err,data){
    var datas=data[0];
    if (data == null) {
      
            res.json({
              msg: "登陆失败，用户名或密码错误"
            })
            return
          }
      
          res.json({
            msg: "登陆成功"
          })
      
   res.cookie("userName",userName,{
     maxAge:60*60*1000
   })
    // if(datas.userName==userName&&datas.userPwd==userPwd)
    // {
    //   res.send("登录成功")
    // }
    // else{
    //   res.send("登录失败")
    // }
  })
});



router.get('/regress',function(req,res,next){
   user.create()
})
module.exports = router;

//后台程序 专门控制路由的一个文件
//启动的时候 在此目录中打开终端



