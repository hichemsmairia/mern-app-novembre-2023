const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  cin: { type: Number, required: true },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
