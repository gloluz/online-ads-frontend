import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser,
  faClock,
  faBell,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

import "./App.css";
import Header from "./containers/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";

library.add(faPlusSquare, faSearch, faUser, faClock, faBell, faEye);

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = Cookies.get("UserToken");

    if (token) {
      setToken(token);
    }
  }, []);

  const handleLogin = token => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken("");
    Cookies.remove("UserToken");
  };

  return (
    <Router>
      <Header token={token} onLogout={handleLogout} />

      <Switch>
        <Route path="/sign_up">
          {token && <Redirect to="/" />}
          {!token && <SignUp />}
        </Route>
        <Route path="/log_in">
          {token && <Redirect to="/" />}
          {!token && <LogIn token={token} onLogin={handleLogin} />}
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
