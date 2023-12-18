const express = require("express");
const studentModel = require("../models/studentModel");
const router = express.Router();

router.post("/add_user", (req, res) => {
  const newUser = new studentModel(req.body);
  newUser
    .save()
    .then(() => {
      res.json({ msg: "utilisateur enregistré avec succes ! " });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/get_all_users", (req, res) => {
  studentModel.find({}).then((result) => {
    res.json(result);
  });
});

router.get("/get_user/:id", (req, res) => {
  //studentModel.find({_id : req.params.id})
  studentModel.findById(req.params.id).then((result) => {
    if (result) {
      res.json(result);
    } else {
      res.json({ error: "veuillez verifier l'id" });
    }
  });
});

router.put("/update_user/:id", (req, res) => {
  studentModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.json({ msg: "document mis a jour avec succes ! " });
  });
});

router.delete("/delete_user/:id", (req, res) => {
  studentModel.findByIdAndDelete(req.params.id).then(() => {
    res.json({ msg: "utilisateur supprimé avec succes ! " });
  });
});

module.exports = router;
