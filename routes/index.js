var express = require('express');
var fs = require('fs');
var path = require('path');
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
  var p = path.join(__dirname, '../views/wiki_' + req.params.page + '.jade');
  fs.exists(p, function(ex) {
          if (ex) res.render('wiki_' + req.params.page);
          else res.redirect('/');
  });
});

module.exports = router;
