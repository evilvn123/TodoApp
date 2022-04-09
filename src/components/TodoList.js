import ToDoItem from "./TodoItem";

const ToDoList = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ToDoList;
