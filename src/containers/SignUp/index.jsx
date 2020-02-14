import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookie";

import "./index.css";
import Container from "../Container";

const SignUp = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

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
      alert("Veuillez accepter les conditions générales");
    }

    if (username && email && password === confirmPassword) {
      try {
        const {
          data
        } = await axios.post(
          " https://leboncoin-api.herokuapp.com/api/user/sign_up",
          { username: username, email: email, password: password }
        );
        setData(data);
        console.log("token: ", data.token);

        const token = data.token;
        Cookies.set("UserToken", token, { expires: 20 });
      } catch (error) {
        if (error.response.data.error.indexOf("duplicate key")) {
          alert(
            "Cet identifiant est déjà utilisé, veuillez en choisir un autre"
          );
        }
      }
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

  const checkboxIsSelected = () => {
    setCheckbox(!checkbox);
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

              <label className="label-user-sign-up pseudo" htmlFor="username">
                Pseudo
              </label>
              <input
                id="username"
                type="text"
                className="sign-up-input"
                onChange={handleChangeUsername}
              />

              <label className="label-user-sign-up" htmlFor="email">
                Adresse email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="sign-up-input"
                onChange={handleChangeEmail}
              />

              <div className="sign-up-password-content">
                <div className="title-password-sign-up">
                  <label htmlFor="password" className="label-password">
                    Mot de passe *
                  </label>
                  <label htmlFor="confirm password" className="label-password">
                    Confirmer le mot de passe *
                  </label>
                </div>

                <div className="input-passwords">
                  <input
                    id="password"
                    type="password"
                    className="sign-up-confirm-password"
                    onChange={handleChangePassword}
                  />
                  <input
                    id="confirm password"
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
                  onClick={checkboxIsSelected}
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
