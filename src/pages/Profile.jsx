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
// import UserContext from "../components/Auth/UserContext";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import CardsFavorite from "../components//buttons/CardsFavorite";

class Profile extends Component {

  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    sports: [],
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // apiHandler
    //   .signup(this.state)
    //   .then((data) => {
    //     this.context.setUser(data);
    //     this.props.history.push("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  componentDidMount() {
    if (this.context.user){
    apiHandler
      .get(`/api/user/sports`)
      .then((data) => {
        console.log(data.data.preferences.map((items)=>{
          console.log("test", items.favoriteSport.sport)
        }));
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  
  render() {
    if (this.context.user === null) {
      return null;
    }
    return (
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <div className="main-container">
              {/* <h2 className="title-container">Inscription</h2> */}
              <div className="img-position">
                {this.context.isLoggedIn && (
                  <img
                    src={this.context.user.image}
                    className="avatar-container"
                  ></img>
                )}
              </div>

              <div className="upload-position">
                <UploadBtn />
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
                      defaultValue={this.context.user.firstName}
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
                      defaultValue={this.context.user.lastName}
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
                      defaultValue={this.context.user.email}
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

                <h3 className="title">Sports favoris</h3>

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
                </Grid>

                <div className="favorite-container">
                  {/* {this.context.user.preferences.map((items) => {
                    return (
                      <li>
                        <ul>{items.level}</ul>
                        <ul>{items.favoriteSport}</ul>
                      </li>
                    );
                  })} */}
                  {this.context.user.preferences.map(
                    (items, index) => {
                      return (
                  <Grid container>
                    <Grid xs={12} sm={6} md={4}>
                      <div className="favorite-card-position">
                        <CardsFavorite
                        key={index}
                        name={items.favoriteSport}
                        level={items.level}
                         />
                      </div>
                    </Grid>
                  </Grid>
                  );
                    })}
                </div>

                <div className="submit-btn padding-btn">
                  <SubmitBtn />
                </div>
              </form>
            </div>
          </Container>
        </React.Fragment>
      </>
    );
  }
}

export default withRouter(Profile);
