import { useState } from "react";
import ToDoList from "./TodoList";

const ToDo = ({}) => {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Learn Javascript",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
    {
      id: 3,
      text: "Build a React App",
      completed: false,
    },
  ]);
  return (
    <div>
      <input />
      <ToDoList list={list} />
    </div>
  );
};
export default ToDo;
