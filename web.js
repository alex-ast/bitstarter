var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var IndexFile='index.html';

app.get('/', function(request, response) {
 //response.send('Hello World 2!');
 var fileText = fs.readFileSync(IndexFile, 'ascii');
 response.send(fileText); 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
