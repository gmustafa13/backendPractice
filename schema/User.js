var mongoose = require("mongoose");
var schema = mongoose.Schema;
var userSchema = new schema({
  name: String,
  age: {
    type: Number
  },
  sex: String,
  address: String,
  mobileNumber: [String]
});
module.exports = mongoose.model("user", userSchema);