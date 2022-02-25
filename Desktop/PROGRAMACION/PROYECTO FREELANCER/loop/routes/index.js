var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DELFOS S.A.' });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'PORTAFOLIO' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CONTACTO' });
});

module.exports = router;
