const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../public/success.html"));
});

module.exports = router;
