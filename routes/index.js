const express = require("express");
const router = express.Router();

// Get home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
