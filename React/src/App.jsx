import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export const App = () => {
  
    return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </>
    );
  }