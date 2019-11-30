const express = require("express");
const router = express.Router();
const movieCTRL = require("../controllers/movieCTRL");

router.get("/getmovies/:id", movieCTRL.getmovies);
router.get("/getMovieList", movieCTRL.getMovieList);
router.get("/completed", movieCTRL.completed);
router.get("/getcompleted", movieCTRL.getCompleted);
router.delete("/deleteMovie/:id/:user", movieCTRL.deleteMovie);
module.exports = router;
