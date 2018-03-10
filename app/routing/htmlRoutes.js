var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports=function(app){
// app.get('/api/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/home.html'));
// });
app.use( function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/api/survey", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

}