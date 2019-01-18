const express           = require('express');
const bodyParser        = require('body-parser');
const studentRoute      = require('./routes/studentsData');
const facultyRoute      = require('./routes/facultyData');
const app               = express();
const PORT              = process.env.PORT || 7777;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin'    , "*");
    res.header('Access-Control-Allow-Methods'   , 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers'   , 'Content-Type');
    next();
  });
  
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/students' ,   studentRoute);
app.use('/faculty'  ,   facultyRoute);

app.get('/',(req,res)=>{
    res.send("Welcome to Student course enrollment!!!");
    
});

app.listen(PORT, function() {
  console.log('Listening on port number: ', PORT);
});