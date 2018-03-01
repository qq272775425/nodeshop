var mysql = require('mysql');
var pool = mysql.createPool({//连接池,在连接池建立固定链接数,避免频繁打开连接关闭连接
    host:'localhost',
    user:'root',
    password:'',
    database:'shop'
});

exports.query = function(sql,data,callback){//暴露query方法 数据库有查和改的操作
    pool.getConnection(function(err,conn){//创建连接
        if(err){
            //call(err,null,null);
        }else{
            if(typeof data == 'function'){
                callback = data;
                data = null;
            }
            console.log(data);
            conn.query(sql,data,function(qerr,result){
                //释放链接 扔回池子
                conn.release();
                //事件驱动回调
                console.log(result);
                callback(result);
            });
        }
    });
};