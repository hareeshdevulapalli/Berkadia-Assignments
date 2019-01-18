var express = require('express');
var Student = require('../models/students');
var router  = express.Router();
router.route('/')
    .get(function(req, res) {
        console.log(res.statusCode);
        Student
        .fetchAll()
        .then(function(data) {
            res.json({ data });
        });
    })
    .post(function(req, res) {
        new Student({
            sid: req.body.id,
            sname: req.body.name,
            sage: req.body.age,
            enrolledcourse: req.body.course,
            department: req.body.dept,
        })
    .save()
    .then(function(data) {
        res.json({ data });
    });
  });


module.exports = router;