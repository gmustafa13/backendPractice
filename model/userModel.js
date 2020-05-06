
    const user = require('../schema/User');

var userModel={
    saveData : async (userInfo) => {
        let userData = new user(userInfo);
        return await userData.save();
  }
}

module.exports = userModel;
