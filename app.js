const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const taskRouter = require("./routes/task");
const usersRouter = require("./routes/users");

dotenv.config();
const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/task", taskRouter);
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Node TODO App");
});

module.exports = app;
