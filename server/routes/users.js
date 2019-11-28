const express = require("express");
const router = express.Router();
const usersCTRL = require("../controllers/usersCTRL");

router.get("/register", usersCTRL.register);

module.exports = router;
