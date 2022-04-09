const ToDoItem = ({ item }) => {
  return (
    <div>
      <input type="checkbox" checked={item.completed} />
      <span>{item.text}</span>
    </div>
  );
};

export default ToDoItem;
