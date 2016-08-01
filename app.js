var ex = require("./lyrics.js"); //this file is in the same directory as the current file.

var express = require("express");
var app = express();
// respond with "Hello World!" on the homepage
app.get("/", function(req, res) {
  var selection = Math.floor(Math.random() * ex.length);
  res.send(ex[selection]);

});
var server = app.listen(3000, function () {
  var host = server.address().address; 
  var port = server.address().port;


console.log("Example app listening at http://%s:%s", host, port);
});

//
// var server = app.listen(3000, function(request, response){
//   var port = server.address().port;
//   var selection = Math.floor(Math.random() * ex.length);
//   response.writeHead(200, {
//     "Content-type": "text/plain"
//   });
//   response.write(ex[selection]);
// response.end();
// }).listen(3000);
//
//   console.log("Example app listening at port", port);
// });

// http.createServer(function(request, response) {
//   var selection = Math.floor(Math.random() * ex.length);
//   response.writeHead(200, {
//     "Content-type": "text/plain"
//   }); response.write(ex[selection]);
// response.end();
// }).listen(8888);
