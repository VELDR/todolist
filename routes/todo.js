const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// routes
router.post("/add/todo", async (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });

  try {
    await newTodo.save();
    console.log("Todo added");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

router.get("/delete/todo/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    await Todo.deleteOne({ _id });
    console.log("Todo deleted");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
