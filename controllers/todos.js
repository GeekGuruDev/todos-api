const { findByIdAndUpdate } = require("../models/todos");
const Todo = require("../models/todos");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ ...error });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo Not Found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ ...error });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ ...error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const todo = await Todo.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo Not Found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ ...error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo Not Found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ ...error });
  }
};

module.exports = { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo };
