const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="/google/auth">Authenticate with Google</a>');
});

module.exports = router;
