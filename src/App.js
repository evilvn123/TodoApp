import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="homeAbout" element={<Home />} />
          <Route path="dashboardAbout" element={<Dashboard />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
