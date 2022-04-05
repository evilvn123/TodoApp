import "./App.css";
import ToDo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Things To do</p>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
