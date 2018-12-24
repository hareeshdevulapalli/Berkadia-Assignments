let express = require('express');
var app = express();
app.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});

app.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id', function (req, res) {
  console.log('and this matches too');
  res.end();
});
app.listen(7777, function () {
    console.log('app.all demo is up on port: 7777' );
});

/*
Implementation:

PS C:\Users\user\Desktop\Berkadia-Assignments\week5\node\3.ExpressDocumentation\Application\Methods> node param.js
app.all demo is up on port: 7777
CALLED ONLY ONCE
although this matches
and this matches too
CALLED ONLY ONCE
although this matches
and this matches too
*/