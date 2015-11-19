var express = require('express');
var router = express.Router();
var db = require('../../db');
var UserCourses = db.model('UserCourses');

router.put('/', function(req, res) {
    // TODO issue #4
    res.send('not implemented yet');
});

router.get('/', function(req, res) {
    UserCourses.find(function(err, userCourses){
       // res.send(userCourses);
        res.send({
            id: userCourses.id,
            user: userCourses.user,
            course: userCourses.course
        });
    });
});

router.get('/:coursesId', function(req, res) {
    Courses.find(function(err, courses){
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