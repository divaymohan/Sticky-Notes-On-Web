const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/sticky-notes", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DataBase is Connected...");
    })
    .catch((ex) => {
      console.log(ex);
    });
};
