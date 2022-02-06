const express = require("express");
const { getAllTodos, getTodo, createTodo } = require("../controllers/todos");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodo);

module.exports = router;
