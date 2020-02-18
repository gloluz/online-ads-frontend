import React from "react";

import "./index.scss";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Réplique de LeBonCoin - Codée par{" "}
        <a
          href="https://www.linkedin.com/in/gloria-luzio-a7b05819b/"
          className="link"
        >
          Gloria
        </a>
        {" - "}
        <a
          href="https://www.lereacteur.io/bootcamp-javascript/formation-developpeur-web-mobile/?gclid=EAIaIQobChMIsI-aqf7b5wIVUkTTCh3rwwRqEAAYASAAEgKepPD_BwE"
          className="link"
        >
          Le Reacteur
        </a>
      </span>
    </footer>
  );
};

export default Footer;
