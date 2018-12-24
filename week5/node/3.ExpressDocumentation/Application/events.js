//The mount event is fired on a sub-app, when it is mounted on a parent app. 
//The parent app is passed to the callback function.
var express = require('express');
var app = express();
var admin = express();
admin.on('mount', function (parent) {
  console.log('Admin Mounted');
  console.log(parent); // refers to the parent app
});
admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});
app.use('/admin', admin);
app.listen(7777);
console.log('Listening on port number: 7777');