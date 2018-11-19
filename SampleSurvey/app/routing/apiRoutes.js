var breeds = require("../data/breeds.js");
var path = require("path");

module.exports = function(app) {
  app.get("/api/breeds", function(req, res) {
    res.json(breeds);
  });

  app.post("/api/breeds", function(req, res) {

    var breedMatch = {
      name: "",
      temperment: "",
      photo: "",
      about: "",
      breedDifference: 1000 //Track the difference between the answers, set at 1000 to be higher than any possible difference
    };

    console.log(req.body);

    // To POST and parse the results of the user's survey
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    // Loop through the available breeds in the database
    for (var i = 0; i < breeds.length; i ++) {
      console.log(breeds[i]);
      totalDifference = 0;

      for (var s = 0; s < breeds[i].scores[s]; s++) {

        totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(breeds[i].scores[s]));

        if (totalDifference <= breedMatch.breedDifference) {
          breedMatch.name = breeds[i].name;
          breedMatch.about = breeds[i].about;
          breedMatch.photo = breeds[i].photo;
          breedMatch.temperment = breeds[i].temperment;
          breedMatch.breedDifference = totalDifference;
        }
      }
    }

    // breeds.push(userData);

    res.json(breedMatch);
  });
};