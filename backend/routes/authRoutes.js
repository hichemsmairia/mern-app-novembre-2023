const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      res.json({ error: "cette addresse email est deja utilisé" });
    } else {
      let newUser = new userModel(req.body);
      //------------------
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.log(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
          if (err) {
            console.log(err);
          }
          newUser.password = hashedPassword;
          newUser.save();
          res.json({ msg: "compte cree avec succes ! " });
        });
      });
    }
  } catch (err) {
    res.json(err);
  }
});

router.post('/login',async(req,res)=>{
    
})


module.exports = router;
// ahmed123 == $2b$10$247CVyz6QZnBpY7Oo65OdukiMO.ce8GPIbg4Yas4dpCec.bXBJIH6
