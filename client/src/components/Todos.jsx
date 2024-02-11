import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo.jsx";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <>
      <article className="w-1/2">
        <ul className="list-disc">
          {todos.map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Todos;
