const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/key");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.json({ error: "Пожалуйста, заполните все поля" });
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.json({
        error: "Это имя пользователя уже занято. Попробуйте другое.",
      });
    }

    bcrypt.hash(password, 10).then((hashedPass) => {
      const user = new User({
        name,
        email,
        password: hashedPass,
      });

      user
        .save()
        .then((user) => {
          res.json({ msg: "Siz muvofaqqiyatli royhatdan otdingiz!" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});

router.post("/loginauth", (req, res) => {
  const {email, password} = req.body;

  if(!email || !password){
    res.status(422).json({error: "Пожалуйста, добавьте имя пользователя или пароль"})
  }

  User.findOne({email}).then((savedUser) => {
    if(!savedUser){
      res.status(422).json({error: "Неверный имя пользователя или пароль"})
    }else{
      bcrypt.compare(password, savedUser.password)
      .then((doMatch) => {
        if(doMatch){
          const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
          const {_id, name, email} = savedUser
          res.json({token: token, user: {_id, name, email}})
        }else{
          return res.status(422).json({error: "Неверный имя пользователя или пароль"})
        }   
      })
      .catch((err) => {
        console.log(err);
      })
    }
  })
})

module.exports = router;
