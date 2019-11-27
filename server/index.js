require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_STRING, CONNECTION_STRING } = process.env;
const app = express();
app.use(express.json());

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

app.listen(PORT, () => {
  console.log("db running");
});