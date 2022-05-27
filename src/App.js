import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
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
