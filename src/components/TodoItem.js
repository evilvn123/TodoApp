import { useState } from "react";
import "../styles/TodoItem.css";

const ToDoItem = ({ item, setList, index }) => {
  const [checked, setChecked] = useState(item.completed);

  const handleCheck = (event) => {
    setList((prevList) => {
      prevList[index].completed = event.target.checked;
      return prevList;
    });
    setChecked(event.target.checked);
  };

  return (
    <div className="item">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <span className={checked ? "text isCompleted" : "text"}>{item.text}</span>
    </div>
  );
};

export default ToDoItem;
