// environment variables
const dotenv = require("dotenv");
dotenv.config();

//imports
const express = require("express");

// local imports
require("./auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// starting up our app
const app = express();

require("./startup/routes")(app);

app.get("/", (req, res) => {
  res.send('<a href="/google/auth">Authenticate with Google</a>');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
