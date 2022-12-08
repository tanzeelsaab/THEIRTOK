import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}