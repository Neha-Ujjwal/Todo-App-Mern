import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo.jsx";
import Tabs from "./Tabs.jsx";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type.js";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const removeDoneTodos = () => {
    todos.forEach((todo) => {
      if (todo.done) {
        dispatch(deleteTodo(todo._id));
      }
    });
  };
  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };
  return (
    <>
      <article className="w-1/2">
        <div>
          <Tabs currentTab={currentTab} />
          {todos.some((todo) => todo.done) ? (
            <button
              onClick={removeDoneTodos}
              className="float-right bg-red-600 font-bold py-2 px-2 rounded text-white"
            >
              REMOVE DONE TODOS
            </button>
          ) : (
            ""
          )}
        </div>
        <ul className="list-disc mx-4">
          {getTodos().map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Todos;
