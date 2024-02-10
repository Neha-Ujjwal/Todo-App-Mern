import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
