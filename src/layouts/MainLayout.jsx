import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>NAVBAR</div>
      {children}
      <div>FOOTER</div>
    </>
  );
};

export default MainLayout;
