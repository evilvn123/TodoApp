import "../styles/TodoItem.css"

const ToDoItem = ({ item }) => {
  return (
    <div className="item">
      <input className="checkbox" type="checkbox" checked={item.completed} />
      <span className="text">{item.text}</span>
    </div>
  );
};

export default ToDoItem;
