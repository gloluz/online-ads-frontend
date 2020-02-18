import React, { useState } from "react";
import axios from "axios";

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
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/log_in`,
        {
          email: email,
          password: password
        }
      );

      setData(data);

      const token = data.token;

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
            <label htmlFor="email" className="title-email">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="input"
              onChange={handleChangeEmail}
            />
            <label htmlFor="password" className="title-password">
              Mot de passe
            </label>
            <div className="log-in-password">
              <input
                id="password"
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
