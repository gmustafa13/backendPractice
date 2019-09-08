const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));

app.get('/contactlist',function(req,res){
 var contactlist=[
    {
        name:"Gulam Mustafa",
        email:"gmustafa.mansoori@gmail.com",
        contact:"9987780051"
    },
    {
        name:"Gulam Ali",
        email:"gmustafa.mansoori@gmail.com",
        contact:"9890806960"
    },
    {
        name:"Khalid",
        email:"mohdkhalid@gmail.com",
        contact:"9594850138"
    }
        ]
        res.json(contactlist)
})


mongoose.connect(
  "mongodb://127.0.0.1:27017/backendPractice",
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Mongodb Connected");
  }
);


// app.use("/", (req, res) => {
//   res.sendFile('/index.html');
//  });

var router = require("./controller/userController");
app.use("/userController", router);
app.listen("3000", function() {
  console.log("listening port 3000!");
});
