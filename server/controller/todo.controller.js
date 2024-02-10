import { Todo } from "../models/todo.model.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
    });
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
