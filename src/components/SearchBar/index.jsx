import React from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <div className="input-container">
          <FontAwesomeIcon icon="search" />
          <input
            type="text"
            placeholder="Que Rechercher vous ?"
            className="search-bar-type-search"
          />
        </div>
        <button className="search-bar-button">
          <div> Rechercher</div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
