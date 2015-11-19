var express = require('express');
var router = express.Router();
var db = require('../../db');
var Courses = db.model('Courses');

router.get('/', function(req,res) {
    Courses.find(function(err, courses) {
        if (err) console.error(err);
        res.send(courses);

    });
});

router.get('/:courseId', function(req, res) {

});

router.delete('/:courseId', function(req, res) {

});

router.post('/:courseId', function(req, res) {

});

function createCourseObject(req_body) {
    return {
        name: req_body.name,
        author: null,
        materials: req_body.materials,
        instructors: []
    };
}

router.put('/', function(req, res) {
    var newCour = new Courses(createCourseObject(req.body));

    newCour.save(function(err) {

        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
});

module.exports = router;