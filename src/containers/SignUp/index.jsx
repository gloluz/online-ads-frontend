import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import "./index.css";
import Container from "../Container";

const SignUp = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setChexbox] = useState(false);

  const fetchData = async event => {
    event.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Veuillez compléter tous les champs");
    }

    if (password !== confirmPassword) {
      alert("Veuillez entrer un mot de passe valide");
    }

    if (!checkbox) {
      alert("Veuillez accepter les Conditions Générales de Vente");
    }

    if (username && email && password === confirmPassword) {
      const response = await axios.post(
        " https://leboncoin-api.herokuapp.com/api/user/sign_up",
        { username: username, email: email, password: password }
      );

      setData(response.data);
      console.log(response.data);
    }
  };

  const handleChangeUsername = event => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleChangeEmail = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleChangeConfirmPassword = event => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleChangeCheckbox = () => {
    setChexbox(true);
  };

  return (
    <>
      <Container>
        <div className="sign-up-content">
          <div className="sign-up-left-content">
            <h2 className="why-create-account">Pourquoi créer un compte?</h2>

            <div className="content-left-side">
              <FontAwesomeIcon icon="clock" className="sign-up-icon" />

              <div className="content-why-create-account">
                <h3>Gagnez du temps</h3>
                <p>
                  Publiez vos annonces rapidement, avec vos informations
                  pré-remplies chaque fois que vous le souhaitez déposer une
                  nouvelle annonce.
                </p>
              </div>
            </div>

            <div className="content-left-side">
              <FontAwesomeIcon icon="bell" className="sign-up-icon" />

              <div className="content-why-create-account">
                <h3>Soyez les premiers informés</h3>
                <p>
                  Créez des alertes Immo ou Emploi et ne manquez jamais
                  l'annonce qui vous intéressse.
                </p>
              </div>
            </div>

            <div className="content-left-side">
              <FontAwesomeIcon icon="eye" className="sign-up-icon" />

              <div className="content-why-create-account">
                <h3>Visibilité</h3>
                <p>
                  Suivez les statistiques de vos annonces (nombre de fois où
                  votre annonce a été vue, nombre de contacts reçus).
                </p>
              </div>
            </div>
          </div>

          <div className="sign-up-right-content">
            <form onSubmit={fetchData}>
              <h2 className="title-create-account">Créer un compte</h2>

              <h3 className="title-name">Pseudo</h3>
              <input
                type="text"
                className="sign-up-input"
                onChange={handleChangeUsername}
              />

              <h3>Adresse email *</h3>
              <input
                type="text"
                name="email"
                className="sign-up-input"
                onChange={handleChangeEmail}
              />

              <div className="sign-up-password-content">
                <div className="title-password-sign-up">
                  <h3 className="title-password">Mot de passe *</h3>
                  <input
                    type="password"
                    className="sign-up-confirm-password"
                    onChange={handleChangePassword}
                  />
                </div>

                <div>
                  <h3 className="title-confirm-password">
                    Confirmer le mot de passe *
                  </h3>
                  <input
                    type="password"
                    className="sign-up-confirm-password"
                    onChange={handleChangeConfirmPassword}
                  />
                </div>
              </div>

              <div className="checkbox-content">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={handleChangeCheckbox}
                />
                <span>
                  J'accepte les Conditions Générales de Vente et les Conditions
                  Générales d'Utilisation
                </span>
              </div>

              <button className="sign-up-button-create-account" type="submit">
                Créer mon Compte Personnel
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
