let express = require("express");
let app = express();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
var cookie=require('cookie-parser');
app.use(cookie('secret'));
/*app.use(function(req, res, next){
    res.locals.user = req.user;
    res.locals.authenticated = ! req.user.anonymous;
    next();
  });
*/
//sendingFile:res.sendFile(path [, options] [, fn])
app.get('/redirect',(req,res)=>{
    res.redirect('http://google.com');
});
app.get('/send',(req,res)=>{
    res.send({"name":"abc","age":23});
})
app.get('/json',(req,res)=>{
    let a={"name":"abc","age":23};
    res.json(a);
});
app.get('/jsonp',(req,res)=>{
    let a={"name":"abc","age":23};
    res.jsonp(a);
});
//type:res.type('.html');           //html
app.get('/format/',(req,res)=>{
    res.set('Content-Type', 'text/plain');
    let data=req.body;
    res.format({
        'text/plain': function(){
          res.send(data);
        },
      
        'text/html': function(){
          res.send('<p>hey</p>');
        },
      
        'application/json': function(){
          res.send({ message: 'hey' });
        },
      
        'default': function() {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable');
        }
      });
});
app.get('/viewFile',(req,res)=>{
    res.sendFile('C::/Users/users/desktop/Berkadia-Assignments/week5/ExpressDocumentation/Response/response.js');
});

app.get('/download',(req,res)=>{
    res.download('C::/Users/users/desktop/Berkadia-Assignments/week5/ExpressDocumentation/Response/response.js');
});
app.get('/user/:id', function(req, res){
    res.send('user ' + req.params.id);
});
app.get('/view',(req,res)=>{
    res.cookie('name', 'tobi', { path: '/view' });
    res.clearCookie('name', { path: '/view' });
    res.location('/view');
    res.send(200).send("cookie");
    
});
app.get('/', function (req, res) {
    //res.append('Link', ['<http://localhost/>', '<http://localhost:7777/>']);
    console.log(res.headersSent); // false
    res.send('OK');
    console.log(res.headersSent); // true
});
app.get('/logo',(req,res)=>{
    res.type('ico');
    res.attachment('/favicon.ico');
})
app.listen(7777, function () {
    console.log('app.all demo is up on port: 7777' );
});