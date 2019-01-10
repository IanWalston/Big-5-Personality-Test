const animalscores = require("./data/animalscores.js").data;

//shorthand for squaring
const sq = x => {
  const answer = Math.pow(x, 2);
  return answer;
};

const testuserscore = {
  Agreeableness: 3,
  Conscientiousness: 3,
  Emotional_Stability: 3,
  Extraversion: 3,
  Intellect: 2.9
};

const scorematch = (userscore, samplescores) => {
  const distances = [];

  samplescores.forEach(animalscore => {
    arr = [
      "Extraversion",
      "Conscientiousness",
      "Emotional_Stability",
      "Agreeableness",
      "Intellect"
    ];

    //iterating through a factors array, with one userscore, and one animalscore
    let sum = 0;
    arr.forEach(item => {
      //summing each diffsquared
      sum += sq(userscore[item] - animalscore[item]);
    });

    //squarerooting sum of diffsquareds
    distance = Math.sqrt(sum);

    distobj = {
      distance: distance,
      matchedAnimal: animalscore
    };
    distances.push(distobj);
  });

  const report = {};
  
  distances.sort((a, b) => {
    return a.distance - b.distance;
  })[0].matchedAnimal;

  report.match = distances[0].matchedAnimal
  report.distance = distances[0].distance

  return report;
};

//TEST

console.log(
  "animalmatch.js lion test: ",
  scorematch(testuserscore, animalscores)
);

//exporting function
exports.match = scorematch;
