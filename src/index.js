import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/locationAutocomplete.css";


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


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
