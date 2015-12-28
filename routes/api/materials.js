var express = require('express');
var router = express.Router();
var kramed = require('kramed');
var db = require('../../db');
var Materials = db.model('Materials');

var ObjectId = db.Types.ObjectId;
var groupId;

router.post('/preview', function(req, res) {
  var html = kramed(req.body.src);
  res.send(html);
});

function createMaterialObject(reqBody) {
  var res = {};
  res.data = {};
  if (reqBody.name) res.name = reqBody.name;
  if (reqBody.type) res.type = reqBody.type;
  if (reqBody.src) {
    res.data.src = reqBody.src;
    res.data.html = kramed(reqBody.src);
  }
  if (reqBody.parent) res.parent=reqBody.parent;
  return res;
}

router.put('/', function(req, res) {
  var newMat = new Materials(createMaterialObject(req.body));
  newMat.parent = groupId;
  console.log("GroupId = "+groupId)

  newMat.save(function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/', function(req, res) {
  var query = {};
  if (req.query.materialGroupID) {
    if (req.query.materialGroupID=='null'){
      query.parent=null
    }
    else
    query.parent = new ObjectId(req.query.materialGroupID);
  }

  Materials.find(query, function(err, materials) {
    res.send(materials);
  });

});

router.get('/:materialId', function(req, res) {
  Materials.findById(req.params.materialId, function(err, material) {
    if(material) {
      res.send({
        data: material.data,
        name: material.name,
        type: material.type
      });
    } else {
      res.send({});
    }
  });
});

router.post('/:materialId', function(req, res) {
  console.log(res);
  Materials.findByIdAndUpdate(
    req.params.materialId,
    {$set: createMaterialObject(req.body)},
    function(err, material) {
      res.send(material);
    }
  );
});

router.delete('/:material', function(req, res) {
  Materials.findByIdAndRemove(req.params.material, function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.put('/:groupId', function(req, res) {
  groupId = req.body.groupId;
  res.sendStatus(200);
});

module.exports = router;
