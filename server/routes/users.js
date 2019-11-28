const express = require("express");
const router = express.Router();
const usersCTRL = require("../controllers/usersCTRL");

router.get("/register", usersCTRL.register);
router.get("/login", usersCTRL.login);

module.exports = router;
