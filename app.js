const express = require("express");
const dotenv = require("dotenv");
const taskRouter = require("./routes/task");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Node TODO App");
});

module.exports = app;
