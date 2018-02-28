var mysql = require('mysql');
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'shop'
});

exports.query = function(sql,data,callback){
    pool.getConnection(function(err,conn){
        if(err){
            //call(err,null,null);
        }else{
            if(typeof data == 'function'){
                callback = data;
                data = null;
            }
            conn.query(sql,data,function(qerr,result){
                conn.release();
                callback(result);
            });
        }
    });
};