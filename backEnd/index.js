//express modules
const express = require("express");
const app = express();

//third party module
const morgan = require("morgan");
const helmet = require("helmet");

//middleware from express third party modules
//express middleware
app.use(express.json()); //req.body
app.use(express.urlencoded());
app.use(express.static("public"));

//third party middleware
app.use(helmet());
//how to eneble something in developement environment
if (app.get("env") === "development") {
  console.log("welcome to development enviroment..!!");
  console.log("enabling morgan to simply print the requist..!!");
  app.use(morgan("tiny"));
  console.log("morgan enebled..!");
}

require("./startup/databaseStartup")();

//listen at port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
