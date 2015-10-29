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

router.put('/', function(req, res) {

});

router.get('/:courseId', function(req, res) {

});

router.delete('/:courseId', function(req, res) {

});

router.post('/:courseId', function(req, res) {

});

module.exports = router;