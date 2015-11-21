var express = require('express');
var router = express.Router();
var db = require('../../db');
var Users = db.model('Users');

router.put('/', function(req, res) {
  var user = new Users({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    role: 'user'
  });

  user.save();
  res.send('not implemented yet');
});

router.get('/', function(req, res) {
  Users.find({}, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.send(users);
    }
  });
});

router.get('/:userId', function(req, res) {
  Users.findById(req.params.userId, function(err, user) {
    if (err) {
      console.error(err);
    }
    res.send(user);
  });
});

router.post('/:userId', function(req, res) {
  var updUser = {};
  updUser.name = req.body.name;
  updUser.email = req.body.email;
  updUser.role = req.body.role;

  if (req.body.password !== undefined) {
    updUser.password = req.body.password;
  }

  Users.findOneAndUpdate({_id: req.params.userId}, updUser, function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:userId', function(req, res) {
  Users.remove({_id: req.params.userId}, function(err) {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;