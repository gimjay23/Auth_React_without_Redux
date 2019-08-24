//it appears the entire profile-routes isn't working

const express = require("express");
const app = express();

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

app.get("/", authCheck, (req, res) => {
  //res.send("You are now logged in to your profile");
  res.render({Profile});
});

module.exports = app;
