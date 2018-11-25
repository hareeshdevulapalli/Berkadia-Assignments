var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  console.log("Server created")
  res.end();
}).listen(8080);

Execution:

PS C:\Users\user\desktop\node\week2\nodejs\httpserver> node servercreate.js
server started
