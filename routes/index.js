var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '支付宝福卡--第三方交易市场' });
});

module.exports = router;
