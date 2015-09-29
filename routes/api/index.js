var express = require('express');
var router = express.Router();
var db = require('../../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is an /edu RESTful API.');
});

router.get('/user', function(req, res) {
  res.send(req.user);
});

router.use('/materials', require('./materials.js'));
router.use('/materialGroups', require('./materialGroups.js'));
router.use('/users', require('./users.js'));
router.use('/userGroups', require('./userGroups.js'));

module.exports = router;
