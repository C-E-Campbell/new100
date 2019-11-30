const movieData = require("../data/movies.json");

module.exports = {
  completed: async (req, res, next) => {
    const db = req.app.get("db");
    const { userId, movieId } = req.body;
    try {
      await db.complete_movie([userId, movieId]);
      res.status(200).send("Movie Finished");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error occured in movieCTRL");
    }
  },
  getCompleted: async (req, res, next) => {
    const db = req.app.get("db");
    const { userId } = req.body;
    try {
      const results = await db.return_completed_movies([userId]);
      const movieIds = results.map(movie => {
        return movie.movieid;
      });
      res.status(200).send(movieIds);
    } catch (err) {
      console.log(err);
    }
  },
  getmovies: async (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    try {
      const result = await db.get_completed_movies([id]);
      const ids = result.map(movie => movie.movieid);
      if (result[0]) {
        res.status(200).send(ids);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      console.log(err);
    }
  },
  deleteMovie: async (req, res) => {
    const db = req.app.get("db");
    const { user, id } = req.params;
    const result = await db.check_for_movie([user, id]);
    if (!result[0]) {
      db.complete_movie([user, id]);
      res.status(200).send("movie completed");
    }
  },
  getMovieList: (req, res) => {
    res.status(200).send(movieData);
  }
};
