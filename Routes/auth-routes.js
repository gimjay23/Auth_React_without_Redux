const passport = require("passport");
const express = require("express");
const app = express();

// auth login
app.get("/login", (req, res) => {
  res.send(req.user );
});

// auth logout
app.get("/logout", (req, res) => {
  // handle with passport
  req.logout();
  res.redirect("/");
});

//auth with google
app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/google/callback",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    var token= req.user.token;
    res.redirect("http://localhost:3000/profile?token=" + token); //initially /profile/
  }
);
// callback route for google to redirect to
// hand control to passport to use code to grab profile info
app.get(
  "/facebook",
  passport.authenticate("facebook", {
    authType: "rerequest",
    scope: ["email", "public_profile", "user_friends", "manage_pages"] //<= only needed for development mode
  })
);
app.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    scope: ["email", "public_profile", "user_friends", "manage_pages"], //<= only needed for development mode
    failureRedirect: "/login"
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/profile"); //initally /profile/
  }
);

module.exports = app;
