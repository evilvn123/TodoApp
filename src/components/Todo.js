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

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const newId = list[list.length - 1].id + 1; 
    // k = list.length: độ dài mảng
    // list[k-1]: phần tử cuối cùng của mảng list (vì đánh số từ 0)
    setList((prevList) => [
      ...prevList,
      {
        id: newId,
        text: inputValue,
        completed: false,
      },
    ]);
  };

  const [mode, setMode] = useState("Active");

  const handleMode = (mode) => {
    setMode(mode);
  }

  return (
    <div>
      <div className="control">
        <button className={mode === "All" ? "modeButton active" : "modeButton"} onClick={() => handleMode("All")}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="add">
        <input
          onChange={handleChange}
          value={inputValue}
          className="input"
          placeholder="Add task"
        />
        <button onClick={handleAdd}>+</button>
      </div>
      <ToDoList list={list} setList={setList} />
    </div>
  );
};
export default ToDo;
