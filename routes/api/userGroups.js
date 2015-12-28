var express = require('express');
var router = express.Router();
var db = require('../../db');
var UserGroups = db.model('UserGroups');

function Group(name, parent, id) {
  this.name = name;
  this.parent = parent;
  this._id = id;
}

function buildGroupsTree(groups, group) {
  var buildGroups = [];

  if (group != undefined) {
    groups.forEach(function(g) {
      if (g.parent + '' == group._id) {
        buildGroups.push(new Group(g.name, g.parent, g._id));
      }
    });

    group.groups = buildGroups;
    buildGroups.forEach(function(item) {
      buildGroupsTree(groups, item);
    });
  } else {
    var rootGroup = null;

    groups.forEach(function(item) {
      if (item.name == 'root') {
        rootGroup = new Group(item.name, item.parent, item._id);
        buildGroupsTree(groups, rootGroup);
      }
    });

    return rootGroup;
  }
}

router.put('/', function(req, res) {
  var newUserGroup = new UserGroups({
    name: req.body.name,
    parent: req.body.parent
  });

  newUserGroup.save(function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/', function(req, res) {
  UserGroups.find({}, function(err, groups) {
    var response = {};
    response.groups = groups;
    response.groupsTree = buildGroupsTree(groups);
    res.send(response);
  });
});

router.get('/:groupId', function(req, res) {
  // TODO issue #4
  res.send('not implemented yet');
});

router.post ('/:groupId', function(req, res) {
  UserGroups.success(function(userGroups) {
    console.log('UserGroups:', userGroups);
    res.send(userGroups);
  });
});

router.delete('/:groupId', function(req, res) {

  UserGroups.findByIdAndRemove(req.params.groupId, function(err) {
if (err) {
  res.sendStatus(400);
} else {
  res.sendStatus(200);
}
});
});


module.exports = router;