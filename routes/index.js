var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zepto' });
});

/* GET wiki. */
router.get('/wiki', function(req, res, next) {
  res.redirect('https://github.com/zepto-lang/zepto/wiki');
});

module.exports = router;
