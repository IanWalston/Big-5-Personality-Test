const animalscores = require("./data/animalscores.js")

//shorthand for squaring
const sq = x => {
  return Math.pow(x, 2);
};

//this function will use a 5 dimensional pythagorean theorumn to determine the 'distance' between a pair of 5 factor test scores
const pythag5 = (arr1, arr2) => {
  const [q, w, e, r, t] = arr1;
  const [a, s, d, f, g] = arr2;
  return Math.sqrt(sq(q - a) + sq(w - s) + sq(e - d) + sq(r - f) + sq(t - g));
};

//the 5D distance here should be 5
console.log(pythag5([1, 2, 1, 2, 1], [2, 2, 3, 4, 5]) == 5);

const testuserscore = {
  Agreeableness: 3,
  Conscientiousness: 3,
  Emotional_Stability: 3,
  Extraversion: 3,
  Intellect: 2.9
};

const scorematch = (userscore, samplescores) => {
    console.log(userscores)
    console.log(samplecores)
};
