import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

export const App = () => {
  
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
    );
  }