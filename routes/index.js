var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var alipay = req.query.alipay;
  var from = req.query.from;
  var to = req.query.to;
  res.redirect("http://qiuhongbao.cn/result.html?alipay="+alipay+"freak"+"&from="+from+"&to="+to);
});

module.exports = router;
