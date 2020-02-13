import React from "react";

import "./index.css";
import Container from "../Container";

const LogIn = () => {
  return (
    <>
      <Container>
        <form className="log-in">
          <div className="log-in-content">
            <h2 className="title-connection">Connexion</h2>
            <h3 className="title-email">Adresse email</h3>
            <input type="text" name="email" className="input" />
            <h3 className="title-password">Mot de passe</h3>
            <div className="log-in-password">
              <input type="password" className="input" />
              <button className="log-in-button-connect">Se connecter</button>
            </div>
            <h3 className="log-in-not-account">Vous n'avez pas de compte ?</h3>
            <button className="log-in-create-account">Créer un compte</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default LogIn;
