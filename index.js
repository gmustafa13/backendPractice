const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static('public'));


mongoose.connect(
  "mongodb://127.0.0.1:27017/backendPractice",
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Mongodb Connected");
  }
);
console.log(__dirname)

// app.use("/", (req, res) => {
//   res.sendFile('/index.html');
//  });

var router = require("./controller/userController");
app.use("/userController", router);
app.listen("3000", function() {
  console.log("listening port 3000!");
});
