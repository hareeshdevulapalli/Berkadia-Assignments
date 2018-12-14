/*
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance 
of express.Router().Load router-level middleware by using the router.use() and router.METHOD() functions.
The following example code replicates the middleware system that is shown above for application-level middleware, 
by using router-level middleware:
*/
var express=require('express');
var app = express();
var router = express.Router();
//router middleware
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});
//mounting the path
router.get('/login/:id1/:p', function (req, res, next) {
  if (req.params.id1 === 'username' && req.params.p === 'password') 
    next()
  else res.end("Invalid user");
},function(req,res,next){
    res.end("valid user");
});
//using router
app.use('/', router);
app.listen(4000,()=>console.log("port:4000"));