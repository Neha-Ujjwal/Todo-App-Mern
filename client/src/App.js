// App.jsx
import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
