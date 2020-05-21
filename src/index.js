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
import yellow from '@material-ui/core/colors/yellow';

import orange from '@material-ui/core/colors/orange';

const colorSecondary = "ffc107";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      // main: '#4fc4cf',
    },
    secondary: {
      // main: '#f50057',
     
      main: '#ff3d00',
      //  main: '#d1d1e9',

    },
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
