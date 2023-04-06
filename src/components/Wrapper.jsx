import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
