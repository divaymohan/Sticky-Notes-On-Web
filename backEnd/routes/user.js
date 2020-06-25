const express = require("express");
const { validateUser } = require("../model/user");
const { getUsers, getUser, addUser } = require("../database/user");

const Router = express.Router();

Router.get("/", async (req, res) => {
  const users = await getUsers();
  return res.send(users);
});
//get by id
Router.get("/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  if (!user)
    return res.status(400).send(`No user found with id${req.params.id}`);
  return res.send(user);
});
//post request
Router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  console.log(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const result = await addUser(req.body);
  if (!result) return res.status(200).send("Server Error..!!");
  return res.send(result);
});
module.exports = Router;
