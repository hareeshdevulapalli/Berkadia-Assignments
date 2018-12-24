var express    = require('express');        // call express
var app        = express();         
app.use(express.static('public'));
//Now, we can load the files that are in the public directory:
//http://localhost:3000/css/style.css
//http://localhost:3000/js/app.js
//http://localhost:3000/images/bg.png
//http://localhost:3000/hello.html
app.listen(7777);
console.log('Listening on port number: 7777');