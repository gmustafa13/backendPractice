var user = require("../model/userModel");
var express = require("express");
var callback= require('../callback')
var router = express.Router();

router.post('/save',(req,res)=>{
  user.save(req.body,res.callback)
})
module.exports = router;
