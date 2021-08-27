const express = require("express");
const router = express.Router();
const isLoggedInMember = require("../middleware/isLoggedInMember");
const passport = require("passport");

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

router.get("/protected", isLoggedInMember, (req, res) => {
  console.log(req.cookies['connect.sid']);
  res.send(`Hello ${req.user.displayName}`);
});

router.get("/failure", (req, res) => {
  res.send("Failed to login");
});

module.exports = router;
