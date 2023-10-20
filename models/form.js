const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  websiteURL: {
    type: String,
    required: true,
    trim: true,
  },
  imageURL: {
    type: [String],
    required: true,
  },
});

const UserModel = mongoose.model("Users", UserSchema, "Users");

module.exports = UserModel;
