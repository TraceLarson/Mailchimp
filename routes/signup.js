const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

isInputEmpty = (req, res, next) => {
  //   const emptyValues = Object.keys(req.body).filter(value => !value);
  req.root = Object.keys(req.body).filter(value => !req.body[value]);
  next();
};

router.post("/", isInputEmpty, (req, res, next) => {
  req.root.length > 0 ? res.redirect("fail") : res.redirect("/success");
});

module.exports = router;
