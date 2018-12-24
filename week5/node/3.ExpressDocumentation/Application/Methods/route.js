let express = require('express');
var app = express();
app.route('/events')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
})
.get(function(req, res, next) {
  res.json({"message":"hai"});
})
.post(function(req, res, next) {
  // maybe add a new event...
});
app.listen(7777, function () {
    console.log('app.all demo is up on port: 7777' );
});