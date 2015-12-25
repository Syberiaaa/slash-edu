var express = require('express');
var router = express.Router();
var db = require('../../db');
var MaterialGroups = db.model('MaterialGroups');

router.put('/', function(req, res) {
  var newMatGrps = new MaterialGroups({
    name: req.body.name,
    parent: req.body.parent,
    owner: req.user._id
  });

  newMatGrps.save(function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/', function(req, res) {
  MaterialGroups.find(function(err, materialgroups) {
    res.send(materialgroups);
  });
});

router.get('/:groupId', function(req, res) { });

router.post('/:groupId', function(req, res) {
  // TODO issue #10
  res.send('not implemented yet');
});

router.delete('/:groupId', function(req, res) {
  MaterialGroups.findByIdAndRemove(req.params.groupId, function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;