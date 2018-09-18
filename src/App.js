import React from "react";

import { Provider } from "mobx-react";

import { Router, Link, Switch } from "react-static";
import styled, { injectGlobal } from "styled-components";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import counterStore from "./store";

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const store = {
  counter: counterStore
};

const App = () => (
  <Provider {...store}>
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </Provider>
);

export default hot(module)(App);
