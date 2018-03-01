var db = require('./db');


exports.getAll = function(callback){
    db.query('select prod.*, img.img_src from t_product prod, t_product_img img where prod.prod_id=img.prod_id', callback);
};