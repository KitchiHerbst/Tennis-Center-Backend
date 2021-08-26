// environment variables
const dotenv = require("dotenv");
dotenv.config();

//imports
const express = require("express");
const passport = require("passport");

// local imports
require("./auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.status(401);
}

// starting up our app
const app = express();

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res) => {}
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {}
);

app.get("/protected", isLoggedIn, (req, res) => {
  res.send("Hello!");
});

app.get("/auth/failure", (req, res) => {
  res.send("Failed to login");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
