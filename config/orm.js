var connection = require("./connection.js");

var orm = {
  selectBreed: function(size, outdoor_space, child_safe, sociable, multi_animal_safe) {
    var queryString = "SELECT * FROM breeds WHERE size = ? AND outdoor_space = ? and child_safe = ? and sociable = ? and multi_animal_safe = ?";
    connection.query(queryString, [size, outdoor_space, child_safe, sociable, multi_animal_safe], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
