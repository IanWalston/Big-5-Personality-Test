const Animalscore = function(
  name,
  Extraversion,
  Conscientiousness,
  Emotional_Stability,
  Agreeableness,
  Intellect
) {
  (this.name = name),
    (this.Extraversion = Extraversion),
    (this.Conscientiousness = Conscientiousness),
    (this.Emotional_Stability = Emotional_Stability),
    (this.Agreeableness = Agreeableness),
    (this.Intellect = Intellect);
};

const animalscores = [
  new Animalscore("dog", 5, 2, 3, 5, 3),
  new Animalscore("cat", 1, 3, 4, 3, 4),
  new Animalscore("bee", 5, 5, 3, 3, 4),
  new Animalscore("shark", 3, 4, 5, 2, 4),
  new Animalscore("penguin", 5, 2, 4, 4, 3),
  new Animalscore("chipmonk", 3, 4, 1, 4, 3),
  new Animalscore("lion", 3, 2, 4, 2, 4),
  new Animalscore("gerbal", 1, 2, 1, 3, 3),
  new Animalscore("peacock", 5, 3, 5, 3, 4),
  new Animalscore("horse", 2, 4, 5, 3, 5)
];

console.log(animalscores);
exports.data=animalscores