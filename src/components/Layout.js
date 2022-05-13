import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="ml-12 lg:pl-12 mt-28">{children}</div>
    </div>
  );
};

export default Layout;
