const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config/key")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req, res, next) => {
  const {authorization} = req.headers;

  if(!authorization){
    res.status(401).json({error: "You must be loggin in"})
  }

  const token = authorization.replace("Islom ", "")

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if(err) {
      return res.status(401).json({error: "You must be loggin in"})
    }

    const { _id } = payload;

    User.findOne(_id).then((userData) => {
      req.body = userData;
      next()
    })  
  })
}