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
  }
};
