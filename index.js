// environment variables
const dotenv = require("dotenv");
dotenv.config();

//imports
const express = require("express");

// starting up our app
const app = express();

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get("/protected", (req, res) => {
  res.send("Hello!");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
