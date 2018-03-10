var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friendsArr = require("../data/friends.js")


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


module.exports = function(app){

app.get("/api/friends", function(req, res) {

    res.json(friendsArr);
});

app.post("/api/survey", function(req, res) {
    

    var userInput = req.body;
    // console.log("req is : " + JSON.stringify(req.body))
    // console.log("user input is : " + JSON.stringify(userInput));
    var userScore = userInput.scores;
    var match = friendsArr[0];

    var totalDifference = 50; //Max difference that can occur is 50.

    //Loop through all friends in the friendsArr from friends.js
    for(var i =0 ; i < friendsArr.length ; i++){
       var surveyDiff = 0;
       
        //Loop through individual scores in the array.

            userScore.forEach(function(j){
                surveyDiff += (Math.abs(friendsArr[i].scores[j] - userScore[j]));
            })

            // surveyDiff = userScore.map(function (userScr){
            //     return surveyDiff + Math.abs(fArr - userScr)
            //     console.log("surevey diff in loop" + surveyDiff );
            // })
            // console.log("surevey diff after loop" + surveyDiff );

            if (surveyDiff < totalDifference) {

				totalDifference = surveyDiff;
				match = friendsArr[i];
            }
    }

    console.log("match: " + JSON.stringify(match))
    res.json(match);
    
});
}

