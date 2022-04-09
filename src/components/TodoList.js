import ToDoItem from "./TodoItem";
import "../styles/TodoList.css"

const ToDoList = ({ list }) => {
  return (
    <div className="list">
      {list.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ToDoList;
// [4,5,8,9].map(item => item+5) ==> [9,10,13,14]