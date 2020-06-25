const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  userName: {
    type: String,
    maxlength: 20,
    minlength: 3,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 1000,
    required: true,
  },
  joinDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {
  userScheme,
};
