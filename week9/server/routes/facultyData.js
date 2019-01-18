var express = require('express');
var Faculty = require('../models/faculty');
var router  = express.Router();
router.route('/')
    .get(function(req, res) {
        console.log(res.statusCode);
        Faculty
        .fetchAll()
        .then(function(data) {
            res.json({ data });
        });
    });

module.exports = router;