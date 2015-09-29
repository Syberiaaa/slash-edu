var express = require('express');
var router = express.Router();
var db = require('../../db');
var UserGroups = db.model('UserGroups');

router.put('/', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

router.get('/', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

router.get('/:groupId', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

router.post('/:groupId', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

router.delete('/:groupId', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

module.exports = router;