import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="homeAbout" element={<Home />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
