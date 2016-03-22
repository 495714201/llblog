var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{title:'注册'});
});

router.post('/reg', function(req, res, next) {

});


router.get('/login', function(req, res, next) {
    res.render('user/login',{title:'登录'});
});

router.post('/login', function(req, res, next) {
});

router.post('/login', function(req, res, next) {
});



module.exports = router;
