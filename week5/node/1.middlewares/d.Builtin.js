/*
Express has the following built-in middleware functions:
    express.static serves static assets such as HTML files, images, and so on.
    express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
    express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
*/
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
  app.use(express.static('public', options));
  app.listen(4000,()=>console.log("port:4000"));