var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zepto' });
});

/* GET wiki. */
router.get('/wiki', function(req, res) {
  res.redirect('/wiki/Index');
});

/* GET wiki page. */
router.get('/wiki/:page', function(req, res) {
  res.render('wiki_' + req.params.page);
});

module.exports = router;
