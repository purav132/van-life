import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <Link to="/" className="title">
            #VANLIFE
          </Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
