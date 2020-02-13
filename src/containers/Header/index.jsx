import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import Logo from "./Leboncoin.fr_Logo_2016.svg.png";
import Container from "../Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <div className="header-left">
            <div>
              <img src={Logo} alt="logo le bon coin" className="header-logo" />
            </div>
            <div>
              <button className="button-add-offer">
                <FontAwesomeIcon icon="plus-square" className="icon-square" />

                <span>Déposer une annonce</span>
              </button>
            </div>
            <button className="button-search">
              <FontAwesomeIcon icon="search" className="icon-search" />
              <span>Rechercher</span>
            </button>
          </div>
          <div className="header-right">
            <button className="button-connect">
              <div>
                <FontAwesomeIcon icon="user" className="icon-user" />
              </div>
              <div>Se connecter</div>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
