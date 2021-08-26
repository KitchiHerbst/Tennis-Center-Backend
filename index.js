// environment variables
const dotenv = require("dotenv");
dotenv.config();

//imports
const express = require("express");

// local imports
require("./auth");

// starting up our app
const app = express();

// startup
require("./startup/routes")(app);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
