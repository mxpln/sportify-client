import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import UserContext from "../Auth/UserContext";
import { withRouter } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import SubmitBtn from "../buttons/SubmitBtn";
import Password from "../buttons/Password";
import SimpleContainer from "../Display/SimpleContainer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
class FormSignin extends Component {
  static contextType = UserContext;
  state = {
    email: "",
    password: "",
  };
<<<<<<< HEAD

  // handleChange = (event) => {
  //   const key = event.target.name;

=======
  // handleChange = (event) => {
  //   const key = event.target.name;
>>>>>>> master
  //   // You can test more if you have to handle different sorts of inputs.
  //   const value =
  //     event.target.type === "file"
  //       ? event.target.files[0]
  //       : event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;
<<<<<<< HEAD

=======
>>>>>>> master
  //   this.setState({ [key]: value });
  // };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("click");
    let email = this.state.email;
    let password = this.state.password;
    let res = { email, password };
    console.log(res);
    apiHandler
      .signin(res)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <div className="main-container">
              {/* <h2 className="title-container">Inscription</h2> */}
<<<<<<< HEAD

              <h2 className="title-container">Connexion</h2>

=======
              <h2 className="title-container">Connexion</h2>
>>>>>>> master
              <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <label htmlFor="email"></label>
                    <TextField
                      onChange={this.handleEmail}
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
<<<<<<< HEAD

=======
>>>>>>> master
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handlePassword}
                      fullWidth
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                    />
                  </Grid>
<<<<<<< HEAD

=======
>>>>>>> master
                  {/* <Grid item xs={3}>
                <Search />
              </Grid>
              <Grid item xs={3}>
                <Level />
              </Grid>
              <Grid item xs={3}>
                <AddBtn />
              </Grid> */}
                </Grid>
<<<<<<< HEAD

=======
>>>>>>> master
                <div className="submit-btn padding-btn">
                  <SubmitBtn clbk={this.handleSubmit} />
                </div>
              </form>
            </div>
          </Container>
        </React.Fragment>
      </>
    );
  }
}
export default withRouter(FormSignin);
