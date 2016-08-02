var lyrics = require("./lyrics.js"); //this file is in the same directory as the current file.

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

// respond with "Hello World!" on the homepage
app.get("/", function(req, res) {
  var selection = Math.floor(Math.random() * lyrics.length);
  res.send(lyrics[selection]);

});

app.get("/api/lyrics", function(req, res) {
  var selection = Math.floor(Math.random() * lyrics.length);
  res.send(lyrics[selection]);
  // res.send("Hello World!");
});

var server = app.listen(procss.env.PORT || 3000, function () {
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
