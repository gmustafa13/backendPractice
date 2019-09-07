var user = require("../model/user");
var express = require("express");
var router = express.Router();
router.post("/", function(req, res) {
  var userSave = new user(req.body);
  userSave.save((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
module.exports = router;
