var express = require('express');
var router = express.Router();
var kramed = require('kramed');
var db = require('../../db');
var Materials = db.model('Materials');

router.post('/preview', function(req, res) {
  var html = kramed(req.body.src);
  res.send(html);
});

router.put('/', function(req, res) {
  var newMat = new Materials({
    name: req.body.name,
    type: req.body.type,
    data: {
      src: req.body.src,
      html: kramed(req.body.src)
    }
  });

  newMat.save(function(err) {
    if (err) res.sendStatus(400);
    else res.sendStatus(200);
  });
});

module.exports = router;
