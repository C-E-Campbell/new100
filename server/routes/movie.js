const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("working");
  res.json({ message: "it works for movies" });
});

module.exports = router;
