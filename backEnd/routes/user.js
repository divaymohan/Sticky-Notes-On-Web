const express = require("express");
const { validateUser } = require("../model/user");
const { getUsers, getUser } = require("../database/user");

const Router = express.Router();

Router.get("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
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
