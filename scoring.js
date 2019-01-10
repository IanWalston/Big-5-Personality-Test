let questions = require("./data/questions.js");

//function for scoring the test
const scoreTest = score => {
  const quarr = questions.questions;

  const newquarr = quarr;
  const scorearray = score.split(",");
  //assign each question in array a score value
  for (let index = 0; index < scorearray.length; index++) {
    const element = scorearray[index];
    newquarr[index].score = element;
  }

  const scoredQuestions = newquarr;

  const userScore = {
    Extraversion: 0,
    Agreeableness: 0,
    Conscientiousness: 0,
    Emotional_Stability: 0,
    Intellect: 0
  };

  scoredQuestions.forEach(question => {
    question.scorecode.includes("1")
      ? (userScore.Extraversion += parseInt(question.score))
      : question.scorecode.includes("2")
      ? (userScore.Agreeableness += parseInt(question.score))
      : question.scorecode.includes("3")
      ? (userScore.Conscientiousness += parseInt(question.score))
      : question.scorecode.includes("4")
      ? (userScore.Emotional_Stability += parseInt(question.score))
      : question.scorecode.includes("5")
      ? (userScore.Intellect += parseInt(question.score))
      : console.log(
          "ERROR: There was a problem with one of the scores. The results will be flawed."
        );
  });

  for (let key in userScore) {
    //divide by 10 to get the mean
    userScore[key] /= 10;
  }

  return userScore;
};

const samplescore =
  "1,4,0,1,2,3,0,4,4,0,4,3,3,0,2,4,3,3,1,0,4,1,1,0,2,1,2,4,1,0,3,2,0,0,3,2,4,0,2,3,4,1,3,3,4,4,1,3,1,2";
console.log(scoreTest(samplescore));

exports.score = scoreTest;
