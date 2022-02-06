const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 10,
  },
  description: {
    type: String,
    maxlength: 20,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
