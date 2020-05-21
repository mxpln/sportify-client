import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../components/Auth/UserContext";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import TextField from "@material-ui/core/TextField";
import SubmitBtn from "../components/buttons/SubmitBtn";
import UploadBtn from "../components/buttons/UploadBtn";
import Password from "../components//buttons/Password";
import Search from "../components/buttons/Search";
import Level from "../components/buttons/Level";
import AddBtn from "../components//buttons/AddBtn";
import Button from "@material-ui/core/Button";

import UpdateBtn from "../components/buttons/UpdateBtn";
// import UserContext from "../components/Auth/UserContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardsFavorite from "../components//buttons/CardsFavorite";
import buildFormData from "../utils/buildFormData";
// import { withUser } from "../Auth/withUser";

class Profile extends Component {
  // static contextType = UserContext;
  state = {
    email: "",
    // password: "",
    firstName: "",
    lastName: "",
    image: null,
    // sports: [],
  };
  // handleChange = (event) => {
  //   const value =
  //     event.target.type === "file"
  //       ? event.target.files[0]
  //       : event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;
  //   const key = event.target.name;
  //   this.setState({ [key]: value });
  // };
  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const image = this.state.image;
    const userInfo = { email, firstName, lastName, image };

    const fd = new FormData();
    const result = buildFormData(fd, userInfo);
    console.log(fd);
    apiHandler
      .editProfile(fd)
      .then((data) => {
        this.props.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleImage = (event) => {
    let value = event.target.files[0];

    this.setState({ image: value });
  };
  handleUpload = (event) => {};
  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  componentDidUpdate() {}
  render() {
    if (this.props.context.user === null) {
      return null;
    }
    console.log(this.state);
    return (
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <div className="main-container">
              {/* <h2 className="title-container">Inscription</h2> */}
              <div className="img-position">
                {this.props.context.isLoggedIn && (
                  <img
                    src={this.props.context.user.image}
                    className="avatar-container"
                  ></img>
                )}
              </div>
              <div className="upload-position">
                <UploadBtn
                  change={this.handleImage}
                  click={this.handleUpload}
                />
              </div>
              <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <h3 className="title">Informations personnelles</h3>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <label htmlFor="firstName"></label>
                    <TextField
                      fullWidth
                      id="firstName"
                      name="firstName"
                      label="Prenom"
                      variant="outlined"
                      onChange={this.handleFirstName}
                      defaultValue={this.props.context.user.firstName}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label htmlFor="lastName"></label>
                    <TextField
                      fullWidth
                      id="lastName"
                      name="lastName"
                      label="Nom"
                      variant="outlined"
                      onChange={this.handleLastName}
                      defaultValue={this.props.context.user.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="email"></label>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onChange={this.handleEmail}
                      defaultValue={this.props.context.user.email}
                    />
                  </Grid>
                  {/*
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                    />
                  </Grid> */}
                </Grid>
                {/* <Grid item xs={3}>
                <Search />
              </Grid>
              <Grid item xs={3}>
                <Level />
              </Grid>
              <Grid item xs={3}>
                <AddBtn />
              </Grid> */}
                {/* <h3 className="title">Sports favoris</h3>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Search />
                  </Grid>
                  <Grid item xs={4}>
                    <Level />
                  </Grid>
                  <Grid item xs={4}>
                    <AddBtn />
                  </Grid>
                </Grid> */}
                <div className="favorite-container">
               <Grid container spacing={1}>

                  {this.props.context.user.preferences.map((items, index) => {
                    return (
                     
                        <Grid xs={12} sm={6} md={4}>
                          <div className="favorite-card-position">
                            <CardsFavorite
                              key={index}
                              id={items._id}
                              name={items.favoriteSport.sport}
                              level={items.level}
                            />
                          </div>
                        
                      </Grid>
                    );
                  })}
                  </Grid>
                </div>
                <div className="padding-btn">
                  <UpdateBtn clbk={this.handleSubmit} />
                </div>
              </form>
            </div>
          </Container>
        </React.Fragment>
      </>
    );
  }
}
export default withUser(withRouter(Profile));
