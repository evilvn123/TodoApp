import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <h1>abc</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="homeAbout" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
