var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/api/friends", function(req, res) {

    res.json(friends)
});

app.post("/api/friends", function(req, res) {
 
    var friendData = req.body;
    res.json(friendData);

    var friendScores = friendData.scores;

});
  