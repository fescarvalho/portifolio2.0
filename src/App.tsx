import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
