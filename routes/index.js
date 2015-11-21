var express = require('express');
var router = express.Router();
var api = require('./api');
var passport = require('passport');

router.use('/api', api);

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/index.html');
});

/* Passport routes */
router.post('/login',
  passport.authenticate('local', { failureRedirect: '/#login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
