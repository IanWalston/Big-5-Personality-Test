const Animalscore = function(
  name,
  Extraversion,
  Conscientiousness,
  Emotional_Stability,
  Agreeableness,
  Intellect,
  imgurl,
  description
) {
  (this.name = name),
    (this.Extraversion = Extraversion),
    (this.Conscientiousness = Conscientiousness),
    (this.Emotional_Stability = Emotional_Stability),
    (this.Agreeableness = Agreeableness),
    (this.Intellect = Intellect),
    (this.imgurl = imgurl),
    (this.description = description);
};

const animalscores = [
  new Animalscore("Dog", 5, 2, 3, 5, 3, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Cat", 1, 3, 4, 3, 4, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Bee", 5, 5, 3, 3, 4, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Shark", 3, 4, 5, 2, 4, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Penguin", 5, 2, 4, 4, 3, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Chipmonk", 3, 4, 1, 4, 3, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Lion", 3, 2, 4, 2, 4, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Gerbal", 1, 2, 1, 3, 3, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Peacock", 5, 3, 5, 3, 4, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  new Animalscore("Horse", 2, 4, 5, 3, 5, "https://www.dike.lib.ia.us/images/sample-1.jpg/image"),
  // new Animalscore("testanimalmenttomatchsamplescore",3,3,3,3,2.99)
];

exports.data = animalscores;
