const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./Routes/auth-routes");
//const profileRoutes = require("./Routes/profile-routes");
require("./Services/Passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.uri, { useNewUrlParser: true });

//how to express app this
app.use("/auth", authRoutes);
//app.use("http://localhost:3000/profile", profileRoutes);

// create home route
/*app.get("/", (req, res) => {
  res.send("You have reached port 5K"); //, { user: req.user });
});
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT);
