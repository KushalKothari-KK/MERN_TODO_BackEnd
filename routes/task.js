const express = require("express");
const {
  newTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const { isAuthentication } = require("../middlewares/auth");
const router = express.Router();

router.post("/new", isAuthentication, newTask);
router.get("/my", isAuthentication, getTask);
router
  .route("/:id")
  .put(isAuthentication, updateTask)
  .delete(isAuthentication, deleteTask);

module.exports = router;
