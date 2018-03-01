var productModel = require('../models/productModel');

exports.list = function(req,res){
    productModel.getAll(function(rs){
        res.send(rs);
    });
};
exports.detail = function(req,res){
    res.render('productDetail');
};