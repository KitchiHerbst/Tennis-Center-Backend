const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  
})

router.get("/logout", (req, res) => {
  req.logOut();
  req.session.destroy();
  res.send("Goodbye");
});

module.exports = router;
