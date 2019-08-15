const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>TEST /api/recipes/ WORKS!</h2>");
});

module.exports = router;
