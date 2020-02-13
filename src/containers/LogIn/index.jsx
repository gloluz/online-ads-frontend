import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "./index.css";
import Container from "../Container";
import { Link, useHistory } from "react-router-dom";

const LogIn = ({ onLogin }) => {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const fetchData = async event => {
    event.preventDefault();

    try {
      const {
        data
      } = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/user/log_in",
        { email: email, password: password }
      );

      setData(data);

      const token = data.token;
      Cookies.set("UserToken", token, { expires: 20 });

      onLogin(token);
      history.push("/");
    } catch (error) {
      alert("Vos identifiants sont incorrects");
    }
  };

  const handleChangeEmail = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <>
      <Container>
        <form className="log-in" onSubmit={fetchData}>
          <div className="log-in-content">
            <h2 className="title-connection">Connexion</h2>
            <h3 className="title-email">Adresse email</h3>
            <input
              type="email"
              name="email"
              className="input"
              onChange={handleChangeEmail}
            />
            <h3 className="title-password">Mot de passe</h3>
            <div className="log-in-password">
              <input
                type="password"
                className="input"
                onChange={handleChangePassword}
              />
              <button className="log-in-button-connect" type="submit">
                Se connecter
              </button>
            </div>
            <h3 className="log-in-not-account">Vous n'avez pas de compte ?</h3>
            <Link to="/sign_up">
              <button className="log-in-create-account">Créer un compte</button>
            </Link>
          </div>
        </form>
      </Container>
    </>
  );
};

export default LogIn;
