import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions/index.js";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Todo = ({ todo }) => {
  const [editOption, setEditOption] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditOption((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className={`flex justify-between m-2 p-4 bg-[#34495e] rounded cursor-pointer text-white ${
        todo.done ? "line-through" : ""
      }`}
      onClick={() => dispatch(toggleTodo(todo._id))}
    >
      <div className={`${editOption ? "hidden" : "block"}`}>{todo.data}</div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${
            editOption ? "block " : "hidden"
          } bg-transparent border-b-2 border-white outline-none`}
        />
      </form>
      <div className="flex ">
        <div className="mx-2">
          <MdEdit onClick={() => setEditOption((prevState) => !prevState)} />
        </div>
        <div className="mx-2">
          <FaTrashAlt onClick={() => dispatch(deleteTodo(todo._id))} />
        </div>
      </div>
    </li>
  );
};

export default Todo;
