// environment variables
const dotenv = require("dotenv");
dotenv.config();

//imports
const express = require("express");
const session = require("express-session");
const passport = require("passport");

// local imports
require("./auth");
const secret = process.env.SECRET;

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// starting up our app
const app = express();
app.use(session({ secret: secret }));
app.use(passport.initialize());
app.use(passport.session());

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
  res.send(`Hello ${req.user.displayName}`);
});

app.get("/auth/failure", (req, res) => {
  res.send("Failed to login");
});

app.get("/logout", (req, res) => {
  req.logOut();
  req.session.destroy();
  res.send("GOodbye");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
