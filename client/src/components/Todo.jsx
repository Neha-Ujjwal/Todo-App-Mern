import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
const Todo = ({ todo }) => {
  return (
    <li className="flex justify-between m-2 p-4 bg-[#34495e] rounded cursor-pointer text-white">
      <div>{todo.data}</div>
      <div className="flex ">
        <span className="mx-2">
          <MdEdit />
        </span>
        <span className="mx-2">
          <FaTrashAlt />
        </span>
      </div>
    </li>
  );
};

export default Todo;
