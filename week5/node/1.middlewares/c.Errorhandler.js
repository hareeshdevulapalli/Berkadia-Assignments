/*
Error-handling middleware always takes four arguments. You must provide four arguments to identify it 
as an error-handling middleware function. Even if you don’t need to use the next object, you must specify 
it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and 
will fail to handle errors.
If you call next() with an error after you have started writing the response (for example, if you encounter
an error while streaming the response to the client) the Express default error handler closes the connection 
and fails the request.So when you add a custom error handler, you must delegate to the default Express error 
handler, when the headers have already been sent to the client:
*/
var express=require('express');
var app = express();
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
app.listen(4000,()=>console.log("port:4000"));