var express = require('express');
var router = express.Router();
var user = require('../controllers/user');
router.post('/regist',user.regist);
router.get('/checkUser',user.checkUser);
module.exports = router;
