const Task = require("../models/task");

const newTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Task.create({
      title,
      description,
    });
    res.status(201).json({
      success: true,
      message: "Task Added successfully",
    });
  } catch (err) {
    console.log(err); //with custom error handler
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({}); //{} will be replaced with userID
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (err) {
    console.log(err); //with custom error handler
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return next(new Error("Task Not Found"));
    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
      success: true,
      message: "Task Updated",
    });
  } catch (err) {
    console.log(err); //with custom error handler
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return next(new Error("Task Not Found"));
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task Deleted",
    });
  } catch (err) {
    console.log(err); //with custom error handler
  }
};

exports.newTask = newTask;
exports.getTask = getTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
