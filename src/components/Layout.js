import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-14 lg:mx-auto mt-30">{children}</div>
    </div>
  );
};

export default Layout;
