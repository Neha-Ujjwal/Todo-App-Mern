import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

function TodoForm() {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(addNewTodo(todoTask));
    setTodoTask("");
  }
  return (
    <>
      <form
        className="flex w-full items-center justify-center mb-4"
        onSubmit={(e) => onFormSubmit(e)}
      >
        <input
          type="text"
          placeholder="Enter new todo..."
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
          className="text-lg text-[#2c3e50] w-1/2  focus:outline-none border-b border-[#2c3e50] "
        />
      </form>
    </>
  );
}
export default TodoForm;
