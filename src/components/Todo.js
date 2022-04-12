import { useState } from "react";
import ToDoList from "./TodoList";
import "../styles/Todo.css";

const ToDo = () => {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Learn Javascript",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: true,
    },
    {
      id: 3,
      text: "Build a React App",
      completed: false,
    },
  ]);

  return (
    <div>
      <div className="add">
        <input className="input" placeholder="Add task" />
        <button>+</button>
      </div>
      <ToDoList list={list} setList={setList} />
    </div>
  );
};
export default ToDo;
