import React from "react";

import Container from "../Container";
import SearchBar from "../../components/SearchBar";
import Articles from "../../components/Articles";
import "./index.css";

const Offers = () => {
  return (
    <>
      <div className="ellipsis-container">
        <div className="ellipsis-background"></div>
      </div>
      <Container>
        <SearchBar />
      </Container>
      <Container>
        <Articles />
      </Container>
    </>
  );
};

export default Offers;
