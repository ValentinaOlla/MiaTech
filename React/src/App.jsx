import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import PublicLayout from "./layouts/PublicLayout";
import Details from "./Details";

export const App = () => {
  
    return (
      <>
      <Routes>
        <Route path="/" element={<PublicLayout />}> 
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
      </>
    );
  }