const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  titre: { type: String, required: true },
  genre: { type: String, required: true },
  annee: { type: Number, required: true },
});

const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;
