const express = require("express");
const session = require("express-session");
const passport = require("passport");

// local imports
const googleLogin = require("../routes/googleLogin");
const logout = require("../routes/logout");
const home = require("../routes/home");

//environment variables
const secret = process.env.SECRET;

module.exports = (app) => {
  app.use(session({ secret: secret }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", home);
  app.use("/google", googleLogin);
  app.use("/logout", logout);
};
