import React from "react";
import { Navbar } from "../components/organisms";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div>FOOTER</div>
    </>
  );
};

export default MainLayout;
