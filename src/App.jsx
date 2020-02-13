import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser,
  faClock,
  faBell,
  faEye
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Header from "./containers/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";

library.add(faPlusSquare, faSearch, faUser, faClock, faBell, faEye);

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/log_in">
          <LogIn />
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
