const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    console.log(req.body)
      const task = await Task.create(req.body);
      const getTasks = await Task.find().sort({"_id":-1});
      res.status(200).json({msg: "success", data: getTasks});
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
      const tasks = await Task.find().sort({"_id":-1});
      res.status(200).json(tasks);
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).json(`NO task with id: ${id}`);
      }
      res.status(200).json(task);
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
      const { id } = req.params;
      const task = await Task.findByIdAndDelete(id);
      const getTasks = await Task.find().sort({"_id":-1});
      if (!task) {
        return res.status(404).json(`NO task with id: ${id}`);
      }

      res.status(200).send({msg: "Task deleted", data: getTasks});
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
      const { id } = req.params;
      const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
      });
      if (!task) {
        return res.status(404).json(`NO task with id: ${id}`);
      }

      res.status(200).json(task);
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
