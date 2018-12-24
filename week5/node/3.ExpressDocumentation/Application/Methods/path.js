let express = require('express');
var app = express()
  , blog = express()
  , blogAdmin = express();

app.use('/blog', blog);
blog.use('/admin', blogAdmin);

console.log(app.path()); // ''
console.log(blog.path()); // '/blog'
console.log(blogAdmin.path()); // '/blog/admin'
/*
    render:Think of app.render() as a utility function for generating rendered view strings. 
Internally res.render() uses app.render() to render views.

app.render('email', function(err, html){
  // ...
});
app.render('email', { name: 'Tobi' }, function(err, html){
  // ...
});
*/
