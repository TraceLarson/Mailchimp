const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

// initialize application
const app = express();

// declare static folder
app.use(express.static("public"));

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const index = require("./routes/index");
const fail = require("./routes/fail");
const success = require("./routes/success");
const signup = require("./routes/signup");
app.use("/", index);
app.use("/fail", fail);
app.use("/success", success);
app.use("/signup", signup);
module.exports = app;
