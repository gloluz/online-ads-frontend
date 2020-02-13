import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Header from "./containers/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

library.add(faPlusSquare, faSearch, faUser);

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
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
