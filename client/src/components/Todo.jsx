import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { toggleTodo } from "../redux/actions/index.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [editOption, setEditOption] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();

  return (
    <li
      className={`flex justify-between m-2 p-4 bg-[#34495e] rounded cursor-pointer text-white ${
        todo.done ? "line-through" : ""
      }`}
      onClick={() => dispatch(toggleTodo(todo._id))}
    >
      <div className={`${editOption ? "hidden" : "block"}`}>{todo.data}</div>
      <form>
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
        <div
          className="mx-2"
          onClick={() => setEditOption((prevState) => !prevState)}
        >
          <MdEdit />
        </div>
        <div className="mx-2">
          <FaTrashAlt />
        </div>
      </div>
    </li>
  );
};

export default Todo;
