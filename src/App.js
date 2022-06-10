import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product">
          {/* slug */}
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
