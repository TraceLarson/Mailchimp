const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");

isInputEmpty = (req, res, next) => {
  //   const emptyValues = Object.keys(req.body).filter(value => !value);
  req.root = Object.keys(req.body).filter(value => !req.body[value]);
  next();
};

router.post("/", isInputEmpty, (req, res, next) => {
  const { firstName, lastName, email } = req.body;

  req.root.length > 0 ? res.redirect("fail") : "";

  // Create request data
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: "https://us19.api.mailchimp.com/3.0/lists/daaa0c6a2a",
    method: "POST",
    headers: {
      Authorization: "auth 66d110a02a538d1d9beb9d3d3172c322-us19"
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      res.redirect("/fail");
    } else {
      if (response.statusCode === 200) {
        res.redirect("/success");
      } else {
        res.redirect("/fail");
      }
    }
  });
});

module.exports = router;
