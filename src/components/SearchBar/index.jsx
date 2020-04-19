import React, { useState } from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
  };

  return (
    <div className="search-bar">
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <FontAwesomeIcon icon="search" />
          <input
            type="text"
            value={text}
            placeholder="Que Rechercher vous ?"
            className="search-bar-type-search"
            onChange={handleChange}
          />
        </div>
        <input className="search-bar-button" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default SearchBar;
