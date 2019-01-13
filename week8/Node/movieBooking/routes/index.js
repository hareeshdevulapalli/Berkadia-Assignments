var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');
var m,t,p,n;
mongoose.connect("mongodb://localhost:27017/Moviebooking",{ useNewUrlParser: true })
        .then(()=>console.log("Connected"))
        .catch(err=>console.error("could not connect ",err));
//Schema
const movieDetailsSchema = new mongoose.Schema({
  movieName:String,
  theatreName:String,
  shows:[{
          showTiming:String,
          availableTickets:Number,
          totalTickets:Number
        }],
  pincode:Number,
  location:String
},{collection: 'movieDetails'});
const Theatre = mongoose.model('Theatre',movieDetailsSchema);
/* GET home page. */
router.get('/',function(req,res,next){
  res.render("index",{title:"bookAmovie"});
});
/*Theatres by pincode*/
router.get('/theatresByPincode', function(req, res, next) {
  const pin = req.query.pincode;
  Theatre.find({pincode:pin})
      .then(function(doc) {
        res.render('theatresByPincode', {items: doc,p:pin});
      })
      .catch(err=>console.error("Somthing happened ",err));  
});
/*Theatres by movie*/
router.get('/theatresByCinema', function(req, res, next) {
  let m = req.query.movie;
  Theatre.find({movieName:m})
      .then(function(doc) {
        res.render('theatresByCinema', {items: doc,mv:m});
      });

});
/*Theatres List*/
router.get('/theatresList', function(req, res, next) {
  Theatre.find()
      .then(function(doc) {
        res.render('theatresList', {items: doc});
      });
});

router.get('/bookingTicket', function(req, res, next) {
      res.render('bookingticket');
});

router.get('/bookingTicket1', function(req, res, next) {
  m = req.query.mName;
  t = req.query.tName;
  p = req.query.pCode;
  n = req.query.tNumber;
  if(n>6){
    res.render("exceeded",{items:n});
  }
  else{
    Theatre.find({movieName:m,theatreName:t,pincode:p})
      .then(function(doc) {
        res.render('bookingticket1', {items: doc,m,t,p,n});
      });
  }
  
});

router.post('/bookingTicket2', function(req, res, next) {
  res.render("bookingticket2");
});

module.exports = router;