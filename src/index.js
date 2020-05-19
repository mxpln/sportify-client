import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/locationAutocomplete.css";


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009ee3',
    },
    secondary: red,
    // testcolor: red,
  },
  status: {
    danger: 'orange',
  },
});





ReactDOM.render(
  <BrowserRouter>
    <UserProvider>

    <MuiThemeProvider theme={theme}>
      <App />
      </MuiThemeProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
