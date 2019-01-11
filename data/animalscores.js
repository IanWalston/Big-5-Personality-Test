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
  new Animalscore("Dog", 5, 2, 3, 5, 3, "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1862/1048/pup.jpg?ve=1&tl=1"),
  new Animalscore("Cat", 1, 3, 4, 3, 4, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/330px-Cat03.jpg"),
  new Animalscore("Bee", 5, 5, 3, 3, 4, "https://media.npr.org/assets/img/2018/06/07/gettyimages-200415242-001_slide-d26f3af782b697f15ceebe2f7c380c0e545dd47b-s800-c85.jpg"),
  new Animalscore("Shark", 3, 4, 5, 2, 4, "http://www.nhm.ac.uk/content/dam/nhmwww/discover/megalodon/megalodon_warpaint_shutterstock-full-width.jpg"),
  new Animalscore("Penguin", 5, 2, 4, 4, 3, "https://amp.thisisinsider.com/images/5ad746638a376dbe528b45a3-750-563.jpg"),
  new Animalscore("Chipmonk", 3, 4, 1, 4, 3, "http://www.owlfish.com/weblog/2004/05/chipmunk.jpg"),
  new Animalscore("Lion", 3, 2, 4, 2, 4, "https://conservationaction.co.za/wp-content/uploads/2018/08/CHAS1066.jpg"),
  new Animalscore("Gerbal", 1, 2, 1, 3, 3, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/A_young_gerbil.jpg/1024px-A_young_gerbil.jpg"),
  new Animalscore("Peacock", 5, 3, 5, 3, 4, "https://i0.wp.com/www.whats-your-sign.com/wp-content/uploads/2018/02/PeacockSymbolism.jpg?zoom=1.25&fit=1600,1059&ssl=1"),
  new Animalscore("Horse", 2, 4, 5, 3, 5, "https://www.aspca.org/sites/default/files/blog_072117_house-senate-vote-horse-slaughter_main_1.jpg"),
  // new Animalscore("testanimalmenttomatchsamplescore",3,3,3,3,2.99)
];

exports.data = animalscores;