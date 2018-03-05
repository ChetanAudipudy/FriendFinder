var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get("/api/survey", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });