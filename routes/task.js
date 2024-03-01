const express = require("express");
const {
  newTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const router = express.Router();

router.post("/new", newTask);
router.get("/my", getTask);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
