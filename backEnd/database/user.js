//import required modules
const mongoose = require("mongoose");
const { userScheme } = require("../model/user");
//build model
const userModel = mongoose.model("User", userScheme);

//write utilities
//post request handler
async function addUser(_user) {
  const user = new userModel({
    userName: _user.userName,
    email: _user.email,
    password: _user.password,
  });
  const result = await user.save();
  if (!result) return;
  return result;
}
//get request handler
async function getUsers() {
  return await userModel.find();
}
//get request handler with id
async function getUser(_id) {
  const user = await userModel.findById(_id);
  if (!user) return;
  return user;
}

module.exports = {
  addUser,
  getUsers,
  getUser,
};
