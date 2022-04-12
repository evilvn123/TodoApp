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

  //Tạo ra 1 state inputValue với giá trị khởi tạo là ""
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    // Thay đổi gái trị của state inputValue thành value
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    console.log(inputValue);
    //Dùng setList để thêm 1 task vào list với format {
    //   id: x,
    //   text: inputValue,
    //   completed: false,
    // },
    // với x = last id + 1
  };

  return (
    <div>
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
