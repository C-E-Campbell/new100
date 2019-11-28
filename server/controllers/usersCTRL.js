const bcrypt = require("bcryptjs");
module.exports = {
  register: async (req, res, next) => {
    const db = req.app.get("db");
    const { user, pass, email, start, finish } = req.body;
    try {
      const check = await db.check_for_user([email]);
      if (check[0]) {
        res.status(409).send("User already exists");
      } else {
        const hash = bcrypt.hashSync(pass, 10);
        const newUser = await db.create_new_user([
          user,
          hash,
          email,
          start,
          finish
        ]);
        req.session.user = {
          id: newUser[0].id,
          email: newUser[0].username
        };
        res.status(201).send(req.session.user);
      }
    } catch (err) {
      res.status(500).send("error in register");
    }
  },
  login: async (req, res, next) => {
    const db = req.app.get("db");
    const { email, pass } = req.body;

    try {
      const checkUser = await db.check_for_user([email]);
      let isValid = bcrypt.compareSync(pass, checkUser[0].pass);

      if (isValid) {
        req.session.user = {
          id: checkUser[0].id,
          email: checkUser[0].username
        };
        res.status(201).send(req.session.user);
      } else {
        res.status(400).send("email or pass may be invalid");
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("error in login");
    }
  },
  logout: async (req, res, next) => {
    req.session.destroy();
    res.status(200).send({});
  }
};
