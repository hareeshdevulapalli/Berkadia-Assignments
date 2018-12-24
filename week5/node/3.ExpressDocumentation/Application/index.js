var express = require('express');
var app = express();//The app object conventionally denotes the Express application.
/*The app object has methods for
    Routing HTTP requests: app.METHOD and app.param.
    Configuring middleware: see app.route.
    Rendering HTML views:see app.render.
    Registering a template engine: see app.engine.
*/
app.get('/', function(req, res){
    res.send('hello world');
  });

/*app locals:
    Once set, the value of app.locals properties persist throughout the life of the application, 
in contrast with res.locals properties that are valid only for the lifetime of the request.
*/
app.locals.title = 'My App';

/*app.mountpath:
    The app.mountpath property contains one or more path patterns on which a sub-app was mounted.
    A sub-app is an instance of express that may be used for handling the request to a route.
*/
var admin = express();

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage');
});

var secret = express();
secret.get('/', function (req, res) {
  console.log(secret.mountpath); // /secr*t
  res.send('Admin Secret');
});
admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app
app.listen(7777);
console.log('Listening on port number: 7777');