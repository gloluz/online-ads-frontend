import React, { useState, useEffect } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
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
  faEye,
  faShoppingCart,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

import "./App.css";
import Header from "./containers/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Post from "./containers/Post";
import CheckoutForm from "./containers/CheckoutForm";
import Footer from "./containers/Footer";

library.add(
  faPlusSquare,
  faSearch,
  faUser,
  faClock,
  faBell,
  faEye,
  faShoppingCart,
  faChevronRight,
  faChevronLeft
);

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
    Cookies.set("UserToken", token, { expires: 20 });
  };

  const handleLogout = () => {
    setToken("");
    Cookies.remove("UserToken");
  };

  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
      <Router>
        <Header token={token} onLogout={handleLogout} />

        <Switch>
          <Route path="/payment">
            {!token && <Redirect to="log_in" />}
            <Elements>
              <CheckoutForm />
            </Elements>
          </Route>

          <Route path="/post">
            {!token && <Redirect to="/log_in" />}
            <Post token={token} />
          </Route>

          <Route path="/sign_up">
            {token && <Redirect to="/" />}
            {!token && <SignUp onSignup={handleLogin} />}
          </Route>

          <Route path="/log_in">
            {token && <Redirect to="/" />}
            {!token && <LogIn onLogin={handleLogin} />}
          </Route>

          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/search/:page">
            <Offers />
          </Route>

          <Route path="/">
            <Offers />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </StripeProvider>
  );
};

export default App;
