// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
let scoring = require("./scoring.js");
let questions = require("./questions.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/test.json", function(req, res) {
  res.json(questions);
});
app.get("/score/:score", function(req, res) {
  var score = req.params.score;
  console.log(scoring.score(score));
  return res.json(scoring.score(score));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
