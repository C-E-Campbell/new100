require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movie");
const { PORT, SESSION_STRING, CONNECTION_STRING } = process.env;
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(
  session({
    secret: SESSION_STRING,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 13452345235623623456326435636
    }
  })
);

app.use("/users", userRouter);
app.use("/movie", movieRouter);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log("db running");
});
