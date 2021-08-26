const express = require("express");
const session = require("express-session");
const passport = require("passport");

// local imports
const googleLogin = require("../routes/googleLogin");
const users = require("../routes/users");

//environment variables
const secret = process.env.SECRET;

module.exports = (app) => {
  app.use(session({ secret: secret }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/google", googleLogin);
  app.use("/users", users);
};
