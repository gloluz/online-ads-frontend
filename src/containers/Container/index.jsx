import React from "react";

import "./index.css";

const Container = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
};

export default Container;
