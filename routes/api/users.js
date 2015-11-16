var express = require('express');
var router = express.Router();
var db = require('../../db');
var Users = db.model('Users');

router.put('/', function(req, res) {
    //добавить юзерс

    console.log(req.body.name);
    console.log(req.body.password);
    console.log(req.body.email);
    var user = new Users ({ name: req.body.name,
                            password: req.body.password,
                            email: req.body.email,
                            role: "user"});

    user.save();
    res.send('not implemented yet');
});

router.get('/', function(req, res) {
    var v = Users.find({}, function (err, users) {
        if( err) {
            console.log("Exception");
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
    Users.findOneAndUpdate({id: req.params.userId}, { name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role}, function (err) {});
});

router.delete('/:userId', function(req, res) {
    Users.remove({id: req.params.userId}, function (err) {
        if(err) {
            console.error(err);
        }
    });
});

module.exports = router;