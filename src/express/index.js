const express = require("express");
const morgan = require("morgan");
const db = require("monk")("mongodb://localhost:27017/weight-app");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

const users = db.get("users");
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users/authorize", async function (req, res) {
  res.json({ Kolya: "all good" });
  return;
  console.log(req.body);
  found_users = await users.find({ login: req.body.login });
  res.json({ count: found_users.length });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
