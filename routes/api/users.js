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
    var v = Users.find({}, function (err, us) {
        if( err) {
            console.log("Exception");
        } else {
            res.send(us);
        }
    });
});

router.get('/:email', function(req, res) {
    // TODO issue #3
    res.send('not implemented yet');
});

router.post('/:email', function(req, res) {
    // TODO issue #3
    res.send('not implemented yet');
});

router.delete('/:email', function(req, res) {
    // TODO issue #3
    res.send('not implemented yet');
});

module.exports = router;