const express = require("express");
const dotenv = require("dotenv");
const taskRouter = require("./routes/task");
const usersRouter = require("./routes/users");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1/task", taskRouter);
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Node TODO App");
});

module.exports = app;
