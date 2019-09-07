const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
mongoose.connect(
  "mongodb://127.0.0.1:27017/backendPractice",
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Mongodb Connected");
  }
);

var controller = require("./controller/userController");
app.use("/user", controller);
app.listen("3000", function() {
  console.log("listening port 3000!");
});
