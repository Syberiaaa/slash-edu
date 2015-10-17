var express = require('express');
var router = express.Router();
var db = require('../../db');
var Users = db.model('Users');

router.put('/', function(req, res) {
    // TODO issue #1
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