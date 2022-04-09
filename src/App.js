import "./App.css";
import ToDo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Things To do</h2>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
