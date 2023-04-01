const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.route");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userRouter);

app.use("*", (req, res) => {
  res.send("not found");
});

module.exports = app;
