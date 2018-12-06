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
  req.root.length > 0
    ? res.sendFile(path.join(__dirname, "/../public/fail.html"), {
        emptyValues: req.root
      })
    : res.sendFile(path.join(__dirname, "/../public/success.html"));
});

module.exports = router;
