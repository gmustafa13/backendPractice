var userModel = require("../model/userModel");
var express = require("express");
var router = express.Router();
const {
  TE,
  ReS
} = require('../util/util');

router.post('/user/save', async (req, res) => {
  try {
    const userData = await userModel.saveData(req.body);
    if (!userData) {
      return ReS(res, {
        message: 'Successfully',
        list: []
      }, 200);
    } else {
      return ReS(res, {
        message: 'Successfully',
        list: userData
      }, 200);
    }

  } catch (error) {
    return TE(res,error.message, true)
  }
})
module.exports = router;