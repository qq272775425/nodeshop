var productModel = require('../models/productModel');

exports.list = function(req,res){
    productModel.getAll(function(rs){
        res.send(rs);
    });
};
exports.detail = function(req,res){
    var productId = req.query.productId;
    productModel.getById(productId,function(rs){
        res.render('productDetail');
    });

};