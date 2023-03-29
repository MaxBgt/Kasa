import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Descriptions from "./components/Descriptions";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A propos" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="description/:id" element={<Descriptions />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
