const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

// local imports
const googleLogin = require("../routes/googleLogin");
const logout = require("../routes/logout");
const home = require("../routes/home");
const employees = require("../routes/employees");

//environment variables
const secret = process.env.SECRET;

module.exports = (app) => {
  app.use(session({ secret: secret }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use("/", home);
  app.use("/google", googleLogin);
  app.use("/employees", employees);
  app.use("/logout", logout);
};
