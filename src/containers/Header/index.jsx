import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import Logo from "./Leboncoin.fr_Logo_2016.svg.png";
import Container from "../Container";
import { Link } from "react-router-dom";

const Header = ({ token, onLogout }) => {
  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <div className="header-left">
            <div>
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo le bon coin"
                  className="header-logo"
                />
              </Link>
            </div>
            <div>
              <Link to="/post" className="header-button-post">
                <button className="button-add-offer">
                  <FontAwesomeIcon icon="plus-square" className="icon-square" />
                  <span className="header-button-post-text">
                    Déposer une annonce
                  </span>
                </button>
              </Link>
            </div>
            <button className="button-search">
              <Link to="/" className="icon-search-link">
                <FontAwesomeIcon icon="search" className="icon-search" />
                <span>Rechercher</span>
              </Link>
            </button>
          </div>
          <div className="header-right">
            <button className="button-connect">
              <div>
                <FontAwesomeIcon icon="user" className="icon-user" />
              </div>

              {!token && (
                <Link to="/log_in" className="header-connect">
                  Se connecter
                </Link>
              )}
              {token && (
                <span className="header-connect" onClick={onLogout}>
                  Se déconnecter
                </span>
              )}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
