// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
let scoring = require("./scoring.js");
let animal = require("./animalmatch.js");
let questions = require("./data/questions.js");
const animalscores = require("./data/animalscores.js").data;


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//respond with a copy of the test. This is called as soon as the static page is loaded
app.get("/test.json", function(req, res) {
  res.json(questions);
});

//client requests with a list of answers, server responds with a  
app.get("/score/:answers", function(req, res) {
  //using scoring.js to score test 
  const score = scoring.score(req.params.answers);
  //using animalmatch.js to match a animal to score
  const match = animal.match(score, animalscores);

  return res.json({score, match});
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
