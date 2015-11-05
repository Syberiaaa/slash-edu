var express = require('express');
var router = express.Router();
var kramed = require('kramed');
var db = require('../../db');
var Materials = db.model('Materials');

router.post('/preview', function(req, res) {
  var html = kramed(req.body.src);
  res.send(html);
});

function createMaterialObject(req_body) {
  return {
    name: req_body.name,
    type: req_body.type,
    data: {
      src: req_body.src,
      html: kramed(req_body.src)
    }
  };
}

router.put('/', function(req, res) {
  var newMat = new Materials(createMaterialObject(req.body));

  newMat.save(function(err) {

    if (err) res.sendStatus(400);
    else res.sendStatus(200);
  });
});

router.get('/', function(req,res) {

  Materials.find(function(err, materials){

    res.send(materials);
 });
});

router.get('/:materialId', function(req, res) {

  Materials.findById(req.params.materialId, function (err, material){
    if(err) returnError(err);
    material.save(function(err){
      if(err) return andleError(err);
      res.send({
        data: material.data,
        name: material.name,
        type: material.type
      });
    });
  });
});

router.post('/:materialId', function(req, res) {

  Materials.findByIdAndUpdate(req.params.materialId, { $set: createMaterialObject(req.body)}, function (err, material) {
    if (err) return handleError(err);
    res.send(material);
  });

});

router.delete('/:materialId', function(req, res) {
  // TODO issue #9

  res.send('not implemented yet');
});


module.exports = router;
