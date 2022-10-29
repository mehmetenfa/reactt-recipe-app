import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;