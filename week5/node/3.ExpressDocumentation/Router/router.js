let express = require('express');
var app = express();
/*
    When you use router.route(), middleware ordering is based on when the route is created, not when method
handlers are added to the route. For this purpose, you can consider method handlers to belong to the route 
to which they were added.
*/
const router = express.Router();
router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next();
  });
  router.param('user_id', function(req, res, next, id) {
    // sample user, would actually fetch from DB, etc...
    req.user = {
      id: id,
      name: 'TJ'
    };
    next();
  });
  
  router.route('/users/:user_id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function(req, res, next) {
    res.json(req.user);
  })
  .put(function(req, res, next) {
    // just an example of maybe updating the user
    req.user.name = req.params.name;
    // save user ... etc
    res.json(req.user);
  })
  .post(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });
app.use('/',router);
app.listen(7777, function () {
    console.log('app.all demo is up on port: 7777' );
});