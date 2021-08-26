const express = require("express");
const router = express.Router();
const isLoggedIn = require("../index");

router.get(
  "/auth",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res) => {}
);

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/google/protected",
    failureRedirect: "/google/failure",
  }),
  (req, res) => {}
);

router.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

router.get("/failure", (req, res) => {
  res.send("Failed to login");
});

module.exports = router;
