import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";
import Home from "../pages/Home";
import About from "../pages/About"
import Descriptions from "../pages/Descriptions"
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return ( 
        <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A propos" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="description/:id" element={<Descriptions />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
     );
}
 
export default AppRoutes;