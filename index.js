const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require('./dataBase');
const userController = require('./controller/userController');
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}







app.use(bodyParser.json());
app.use(userController);




const port = (process.env.NODE_ENV !="production" ? 3000 : port)

app.listen(port, function() {
  console.log("listening port 3000!");
});
