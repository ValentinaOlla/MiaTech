import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import PublicLayout from "./layouts/PublicLayout";

export const App = () => {
  
    return (
      <>
      <Routes>
        <Route path="/" element={<PublicLayout />}> 
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      </>
    );
  }