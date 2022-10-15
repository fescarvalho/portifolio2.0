import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
