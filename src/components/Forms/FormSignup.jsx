import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import TextField from "@material-ui/core/TextField";
import SubmitBtn from "../buttons/SubmitBtn";
import UploadBtn from "../buttons/UploadBtn";
import Password from "../buttons/Password";
import Search from "../buttons/Search";
import Level from "../buttons/Level";
import AddBtn from "../buttons/AddBtn";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import { objectToFormData } from "object-to-formdata";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import buildFormData from "../../utils/buildFormData"

import CardsFavorite from "../buttons/CardsFavorite";




class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    image: null,
    preferences: [],
    favoriteSport: "",
    level: "beginner",
    sportCards: [],
    favoriteSportID: "",
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
  handlePassWord = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSearch = (event, value) => {
    let res;
    let id;
    if (value === null) {
      (res = "") && (id = "");
    } else {
      (res = value.sport) && (id = value._id);
    }
    this.setState({
      favoriteSport: res,
      favoriteSportID: id,
    });
  };

  handleRating = (newValue) => {
    let res;
    if (newValue === null || newValue === 1) {
      res = "beginner";
    } else if (newValue === 2) {
      res = "intermediate";
    } else if (newValue === 3) {
      res = "advanced";
    }
    this.setState({
      level: res,
    });
  };

  SubmitPref = (event) => {
    event.preventDefault();
    let favoriteSportOne = this.state.favoriteSport;
    let level = this.state.level;
    let favoriteSport = this.state.favoriteSportID;
    // this.setState({
    //   sportCards: [...this.state.sportCards, { favoriteSport, level }],
    // });
    this.setState({
      sportCards: [...this.state.sportCards, { favoriteSportOne, level }],
      preferences: [...this.state.preferences, { favoriteSport, level }],
    });
  };

  handleImage = (event) => {
    let value = event.target.files[0];

    this.setState({ image: value });
  };
  handleUpload = (event) => {};

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const image = this.state.image;
    const preferences = this.state.preferences;
    const userInfo = { email, password, firstName, lastName, image, preferences };
    const fd = new FormData()
    const result = buildFormData(fd, userInfo);
 
    apiHandler
      .signup(fd)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.sportCards)

    return (
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <div className="main-container">
              <div className="img-position">
                {this.state.image !== null ? (
                  <img
                    className="avatar-container"
                    src={URL.createObjectURL(this.state.image)}
                  />
                ) : (
                  <img
                    src="/media/standard_profile.png"
                    className="avatar-container"
                  />
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
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      onChange={this.handlePassWord}
                    />
                  </Grid>
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

                <h3 className="title">Sports favoris</h3>

                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Search clbk={this.handleSearch} />
                  </Grid>

                  <Grid item xs={4}>
                    <Level ratingValue={this.handleRating} />
                  </Grid>

                  <Grid item xs={4}>
                    <AddBtn clbk={this.SubmitPref} />
                  </Grid>
                </Grid>

                <div className="favorite-container">
                  <Grid container>
                    <Grid xs={12} sm={6} md={4}>
                      <div className="favorite-card-position">
                        {this.state.sportCards.map((items, index) => {
                          return (
                            <CardsFavorite
                              key={index}
                              name={items.favoriteSportOne}
                              level={items.level}
                            />
                          );
                        })}
                      </div>
                    </Grid>
                  </Grid>
                </div>

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

export default withRouter(FormSignup);
