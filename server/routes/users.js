const express = require("express");
const router = express.Router();
const usersCTRL = require("../controllers/usersCTRL");

router.post("/register", usersCTRL.register);
router.post("/login", usersCTRL.login);
router.post("/setMode", usersCTRL.setMode);
router.get("/logout", usersCTRL.logout);

module.exports = router;
