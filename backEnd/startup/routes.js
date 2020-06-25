const express = require("express");
const _user = require("../routes/user");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/user", _user);
};
