let express = require("express");
let app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);//using postman we can do it
});
app.get('/admin', function(req, res, next) {  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  next();
});
app.get('/',(req,res)=>{
    console.log(req.fresh);//false(Indicates whether the request is “fresh.” It is the opposite of req.stale.)
    console.log(req.stale);//true
    console.log(req.hostname);//localhost(Contains the hostname derived from the Host HTTP header.)
    console.log(req.ip);//::1(Contains the remote IP address of the request.)
    console.log(req.ips);//[]
    console.log(req.protocol);//http(Contains the request protocol string: either http or (for TLS requests) https.)
    console.log(req.secure);//false
    console.log(req.subdomains);//[]
    console.log(req.originalUrl); //'/'
    console.log(req.baseUrl); //' '
    console.log(req.path);//'/'
    console.log(req.route);/*Route {
        path: '/',
        stack:
         [ Layer {
             handle: [Function],
             name: '<anonymous>',
             params: undefined,
             path: undefined,
             keys: [],
             regexp: /^\/?$/i,
             method: 'get' } ],
        methods: { get: true } }
        */
    console.log(req.xhr);//false(A Boolean property that is true if the request’s X-Requested-With header 
/*field is “XMLHttpRequest”, indicating that the request was issued by a client library such as jQuery.)*/
    console.log(req.signedCookies.user);// Cookie: user=tobi.CP7AWaXDfAKIRfH49dQzKJx7sKzzSoPq7/AcBBRVwlI3
        // => "tobi")
    console.log(req.accepts(['json', 'text']));// => "json"
    console.log(req.get('content-type'));// => "text/plain"
    // When Content-Type is application/json
    console.log(req.is('json'));              // => 'json'
    console.log(req.is('application/json'));  // => 'application/json'
    console.log(req.is('application/*'));     // => 'application/*'
    console.log(req.is('html'));// => false
});
/*
// Host: "tobi.ferrets.example.com"
    req.subdomains
// => ["ferrets", "tobi"]
*/
app.get('/:id',(req,res)=>{
    let i= req.params.id;
    res.send('id: ' +i);//localhost::7777/1
    console.log(i);//'1'
    console.log(req.cookies);//undefined
});
app.get('/search',(req,res)=>{
    // GET /search?q=tobi+ferret
    console.log(req.query.q);
    // => "tobi ferret"
    // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
    console.log(req.query.order);// => "desc"
    console.log(req.query.shoe.color);// => "blue"
    console.log(req.query.shoe.type);// => "converse"
});
app.listen(7777, function () {
    console.log('app.all demo is up on port: 7777' );
});
/*
// parse header from request
var range = req.range(1000)

// the type of the range
if (range.type === 'bytes') {
  // the ranges
  range.forEach(function (r) {
    // do something with r.start and r.end
  })
}
*/