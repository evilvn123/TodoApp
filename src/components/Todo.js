import { useEffect, useState } from "react";
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

  const [viewList, setViewList] = useState(list);

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

  const [mode, setMode] = useState("All");

  const handleMode = (mode) => {
    setMode(mode);
  };

  useEffect(() => {
    //Thay đổi viewList khi thay đổi các chế độ xem
    if (mode === "All") {
      setViewList(list);
    } else if (mode === "Active") {
      const activeList = list.filter((item) => item.completed === false);
      setViewList(activeList);
    } else if (mode === "Completed") {
      const completedList = list.filter((item) => item.completed === true);
      setViewList(completedList);
    } else {
      setViewList(list);
    }
  }, [mode, list]);

  return (
    <div>
      <div className="control">
        <button
          className={mode === "All" ? "modeButton active" : "modeButton"}
          onClick={() => handleMode("All")}
        >
          All
        </button>
        <button
          className={mode === "Active" ? "modeButton active" : "modeButton"}
          onClick={() => handleMode("Active")}
        >
          Active
        </button>
        <button
          className={mode === "Completed" ? "modeButton active" : "modeButton"}
          onClick={() => handleMode("Completed")}
        >
          Completed
        </button>
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
      <ToDoList list={viewList} setList={setList} />
    </div>
  );
};
export default ToDo;
