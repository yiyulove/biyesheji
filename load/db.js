
// 引入模块mongoose，       本地需要安装  cnpm install mongoose --save
var mongoose = require('mongoose');

// 连接到本地数据库           IP:端口   /      数据库名  
mongoose.connect('mongodb://localhost:27017/users');

module.exports = mongoose

// // 创建关联数据库的数据模型
// var userSchema = new mongoose.Schema({
//     username: String,     // 用户名 类型是 字符串
//     password: String      // 密码 类型是 字符串
// });

// // user 数据表，【注意】 mongoose 会自动在传入的表名后新增1个s
// //       user  ==> users
// var u = mongoose.model('load', userSchema);

// // 查找数据
// u.find({}, function(err, docs) {
//     console.log(docs)
// })
