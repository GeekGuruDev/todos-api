require("dotenv").config();
require("./db/connect");
const express = require("express");
const app = express();
const todoRouter = require("./routes/todos");

app.use(express.json());
app.use("/api/todos", todoRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(3000, console.log(`Server listening on port ${port}...`));
