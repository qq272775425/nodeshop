exports.index = function(req, res, next) {
    res.render('index');
};

exports.login = function(req, res, next) {
    res.render('login');
};
exports.reg = function(req, res, next) {
    res.render('regist');//用render进行页面渲染
};