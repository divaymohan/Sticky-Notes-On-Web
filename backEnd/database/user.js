//import required modules
const mongoose = require("mongoose");
const { userScheme } = require("../model/user");
//build model
const userModel = mongoose.model("User", userScheme);

//write utilities
//post request handler
async function addUser(_user) {
  const user = await userModel.save(_user);
  if (!user) return;
  return user;
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
