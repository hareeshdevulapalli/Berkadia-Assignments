/*
Bind application-level middleware to an instance of the app object by using the app.use() 
and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware 
function handles (such as GET, PUT, or POST) in lowercase.
*/


var express=require('express');
var app=express();
app.get('/login/:i/:p',function(req,res,next){
    var id=req.params.i;
    var pass=req.params.p;
    if(id=='username' && pass=='password'){
        next();
    }
    else{
        res.send("<h1>Invalid user</h1>");
    }
})
app.get('/login/:i/:p',(req,res,next)=>{
        res.end("<h1>Valid user</h1>");
});
app.listen(4000,()=>console.log("port:4000"));