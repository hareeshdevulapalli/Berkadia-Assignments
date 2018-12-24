let express = require('express');
var app = express();
app.disable('trust proxy');
console.log(app.get('trust proxy'));//false
console.log(app.disabled('trust proxy'));//true:it checks whether  it is disabled or not.
app.enable('trust proxy');//makes true
console.log(app.get('trust proxy'));//true
console.log(app.enabled('trust proxy'));//true:Returns true if the setting name is enabled (true),
console.log(app.get('title'));// => undefined
app.set('title', 'My Site');
console.log(app.get('title'));// => "My Site"
/*
    Registers the given template engine callback as ext.
    By default, Express will require() the engine based on the file extension. For example, if you try 
to render a “foo.pug” file, Express invokes the following internally, and caches the require() on subsequent 
calls to increase performance.
app.engine('pug', require('pug').__express);
 */
