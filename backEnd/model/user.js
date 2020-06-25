const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

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
    minlength: 3,
    maxlength: 1000,
    required: true,
  },
  joinDate: {
    type: Date,
    default: Date.now(),
  },
});
function validateUser(_user) {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(5).max(100).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    joinDate: Joi.date(),
  });
  return schema.validate(_user);
}

module.exports = {
  validateUser,
  userScheme,
};
