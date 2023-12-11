const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

router.post("/add_user", (req, res) => {
  const newUser = new userModel(req.body);
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
  userModel.find({}).then((result) => {
    res.json(result);
  });
});

router.get("/get_user/:id", (req, res) => {
  //userModel.find({_id : req.params.id})
  userModel.findById(req.params.id).then((result) => {
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ error: "veuillez verifier l'id" });
    }
  });
});

router.put("/update_user/:id", (req, res) => {
  userModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.json({ msg: "document mis a jour avec succes ! " });
  });
});

router.delete("/delete_user/:id", (req, res) => {
  userModel.findByIdAndDelete(req.params.id).then(() => {
    res.json({ msg: "utilisateur supprimé avec succes ! " });
  });
});

module.exports = router;
