const Todo = require("../models/todos");

const getAllTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
};

const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
};

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};

module.exports = { getAllTodos, getTodo, createTodo };
