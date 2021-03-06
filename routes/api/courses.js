var express = require('express');
var router = express.Router();
var db = require('../../db');
var Courses = db.model('Courses');
var Materials = db.model('Materials');

router.get('/', function(req, res) {
  Courses
    .find()
    .populate('author')
    .exec(function(err, courses) {
      if (err) {
        console.error(err);
      } else {
        res.send(courses);
      }
    });
});

router.get('/:courseId', function(req, res) {
  Courses.findById(req.params.courseId)
    .populate('materials')
    .populate('author')
    .exec(function(err, course) {
      if (err) {
        console.error(err);
      }
      res.send(course);
    });
});

router.delete('/:courseId', function(req, res) {
  Courses.findByIdAndRemove(req.params.courseId, function(err) {
    if (err) {
      console.error(err);
    } else {
      res.send(courses);
    }
  });
});

router.get('/:courseId', function(req, res) {
  Courses.findById(req.params.courseId, function(err, course) {
    if(course) {
      //console.log(course);
      res.send(course);
    } else {
      res.send({});
    }
  });
});

router.delete('/:courseId', function(req, res) { });

router.post('/:courseId', function(req, res) { });

function createCourseObject(reqBody) {
  return {
    name: reqBody.name,
    author: null,
    materials: reqBody.materials,
    instructors: []
  };
}

router.put('/', function(req, res) {
  var newCour = new Courses(createCourseObject(req.body));

  newCour.author = req.user.id;

  newCour.save(function(err) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;