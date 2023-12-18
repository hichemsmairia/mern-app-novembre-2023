const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  cin: { type: Number, required: true },
});

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;
