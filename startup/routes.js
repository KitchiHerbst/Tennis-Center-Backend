const express = require("express");
const googleLogin = require("../routes/googleLogin");

module.exports = (app) => {
  app.use("/google", googleLogin);
};
