var express = require('express'), fs=require("fs");

var app = express.createServer(express.logger());
var content = fs.readFileSync('./index.html','utf8');
var buffer = new Buffer(content, "utf-8")

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8',0,buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
