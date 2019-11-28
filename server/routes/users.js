const express = require("express");
const router = express.Router();
const usersCTRL = require("../controllers/usersCTRL");

router.get("/register", usersCTRL.register);
router.get("/login", usersCTRL.login);
router.get("/logout", usersCTRL.logout);

module.exports = router;
