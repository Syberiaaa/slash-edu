var express = require('express');
var router = express.Router();
var db = require('../../db');
var UserCourses = db.model('UserCourses');
var Users = db.model('Users');
var Courses = db.model('Courses');

var Promise = require('../../utils/promise');

router.put('/', function(req, res) {
  // TODO issue #4
  res.send('not implemented yet');
});

router.get('/', function(req, res) {
  UserCourses.find({}, function(err, userCourses) {
    var response = [];
    var promises = [];
    userCourses.forEach(function(course) {
      var resCourse = {};
      resCourse._id = course._id;
      // TODO: resCourse.course = course.course;
      // resCourse.user;

      promises.push(Users.find({_id: course.user}, function(err, user) {
        resCourse.user = user[0];
      }).exec());
      promises.push(Courses.find({_id: course.course}, function(err, cr) {
        resCourse.course = cr[0];
      }).exec());
      response.push(resCourse);
    });
    Promise.all(promises).then(function() {
      res.send(response);
    }, function(err) { });
  });
});

router.get('/:coursesId', function(req, res) {
  Courses.find(function(err, courses) {
    res.send(courses);
  });
});

router.post('/:coursesId', function(req, res) {
  // TODO issue #4
  res.send('not implemented yet');
});

router.delete('/:coursesId', function(req, res) {
  // TODO issue #4
  res.send('not implemented yet');
});

module.exports = router;