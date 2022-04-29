const express = require('express');
const app = express();
const {MONGO_URI} = require("./config/key")
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 5000;
require("./models/Auth")
const cors = require("cors");


const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//bJOqtsrGFqxlY4ti

mongoose.connect(MONGO_URI, () => {
  console.log('MongoDB connected');
})
app.use(express.json())
app.use(require("./routes/auth"))
if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"))
  })
}

app.listen(port, () => console.log('Server has been started'))