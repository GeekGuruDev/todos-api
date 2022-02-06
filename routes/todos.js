const express = require("express");
const {
  getAllTodos,
  getTodo,
  createTodo,
  deleteTodo,
} = require("../controllers/todos");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodo).delete(deleteTodo);

module.exports = router;
