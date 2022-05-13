import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-8xl ml-12 lg:mx-auto lg:px-12 mt-16 overflow-x-scroll">{children}</div>
    </div>
  );
};

export default Layout;
