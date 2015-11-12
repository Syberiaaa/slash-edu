var express = require('express');
var router = express.Router();
var db = require('../../db');
var UserGroups = db.model('UserGroups');

router.put('/', function(req, res) {
    var newUserGroups = new UserGroups({
        name: req.body.name,
        parent:  {
            src: req.body.src,
            html: kramed(req.body.src)
        }

    });

    newUserGroups.save(function(err) {

        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
});



router.get('/', function(req, res) {
    UserGroups.find({}, function(err, groups) {
    res.send(groups);
    });
});

router.get('/:groupId', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

router.post ('/:groupId', function(req, res){
    UserGroups.success(function (UserGroups) {
            console.log('UserGroups:', UserGroups);
        })
    res.send(UserGroups);
});

router.delete('/:groupId', function(req, res) {
   req.UserGroups.remove(UserGroups);// TODO issue #4
    res.send('not implemented yet');
});

module.exports = router;