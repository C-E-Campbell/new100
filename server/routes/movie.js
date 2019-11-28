const express = require("express");
const router = express.Router();
const movieCTRL = require("../controllers/movieCTRL");

router.get("/completed", movieCTRL.completed);
router.get("/getcompleted", movieCTRL.getCompleted);

module.exports = router;
