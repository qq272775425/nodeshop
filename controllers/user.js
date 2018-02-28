var userModel = require('../models/userModel');
exports.regist = function(req, res, next) {
    var name = req.body.username;
    var pwd = req.body.password;
    var sex = req.body.sex;

    userModel.save({
        username:name,
        password:pwd,
        sex:sex
    },function(result){
        if(result.affectedRows > 0){
            res.redirect('/login');
        }else{
            alert('注册失败');
        }
    });
};


exports.checkUser = function(req, res){
    var name = req.query.username;
    console.log(name + ' ~~~');
    userModel.getByName(name,function(rs){
        if(rs.length >0 ){
            res.send('fail');
        }else{
            res.send('success');
        }
    });
};