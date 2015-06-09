var express = require('express')
  , fs = require('fs')
  , path = require('path')
  , router = express.Router()
  ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zepto' });
});

/* GET install. */
router.get('/install', function(req, res, next) {
  res.render('install');
});

/* GET install. */
router.get('/try', function(req, res, next) {
  res.render('try');
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
