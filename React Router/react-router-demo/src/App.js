import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
