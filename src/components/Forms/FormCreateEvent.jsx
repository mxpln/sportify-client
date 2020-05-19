import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "../buttons/Search";
import TeamSelector from "../buttons/TeamSelector";
import OneDatePicker from "../buttons/OneDatePicker";
import Level from "../buttons/Level";
import UploadBtn from "../buttons/UploadBtn";
import MyMapTwo from "../buttons/MyMapTwo";

import SearchPlace from "./SearchPlace";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";

import SubmitBtn from "../buttons/SubmitBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

class BasicTextFields extends Component {
  state = {
    isSwitchOn: false,
    image: null,
    title: "",
    sportType: "",
    level: "beginner",
    description: "",
    type: "individual",
    maxPlayersByTeam: "",
    maxPlayers: "",
    individualNbrOfParticipants: "",
    date: "",
    day: "",
    hour:'',
    location: "",
  };

  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleSearch = (event, value) => {
    let id;
    if (value === null) {
      id = "";
    } else {
      id = value._id;
    }
    this.setState({
      sportType: id,
    });
  };
  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleNumbOfIndivPlayers = (event) => {
    this.setState({
      maxPlayers: event.target.value,
    });
  };
  handleNumPlayerByTeam = (event) => {
    this.setState({
      maxPlayersByTeam: event.target.value,
    });
  };
  handleTeam = (newValue) => {
    let res;
    if (newValue === "En équipe") {
      res = "collective";
    } else if (newValue === "Individuel") {
      res = "individual";
    }
    this.setState({
      type: res,
      isSwitchOn: !this.state.isSwitchOn,
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
  handlePlace = (place) => {
    const newPlace = {
      type: place.geometry.type,
      coordinates: place.geometry.coordinates,
      formattedAddress: place.place_name,
    };
    this.setState({ location: newPlace });
  };

  handleDate = (event) => {
    let fullDate = event.toString();
    let dateSelected = fullDate.slice(0, 16);
    this.setState({
      day : dateSelected
    })
    
  };
  handleHour = (event) => {
    let fullDate = event.toString();
    let hourSelected = fullDate.slice(16, fullDate.length);
    this.setState({
      hour: hourSelected
    })
  };
  handleImage = (event) => {
    let value = event.target.files[0];

    this.setState({ image: value });
  };
  handleUpload = (event) => {};

  test = () =>{
    return "blabla"
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <div className="main-container">
            <h2 className="title-container">Créer un événement sportif</h2>
            <div className="img-position">
              {this.state.image !== null ? (
                <img
                  className="img-container"
                  src={URL.createObjectURL(this.state.image)}
                />
              ) : (
                <img
                  src="https://www.paysalia.com/sites/default/files/uploads/728x341-valorisation-sport-ubain.jpg"
                  className="img-container"
                />
              )}
            </div>

            <div className="submit-btn padding-btn">
              <UploadBtn change={this.handleImage} click={this.handleUpload} />
            </div>

            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    onChange={this.handleTitle}
                    fullWidth
                    id="outlined-basic"
                    label="Intitulé"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Search clbk={this.handleSearch} />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={this.handleDescription}
                  />
                </Grid>



                <Grid item xs={3}>
                  <TeamSelector parentCallback={this.handleTeam} fullWidth />
                </Grid>

                <Grid item xs={3}>
                  <Level ratingValue={this.handleRating} />
                </Grid>

               <Grid item xs={6} className={
              this.state.isSwitchOn ? "toggleFilterOff" : "toggleDisplayOn"
            }>
                  <TextField
                    fullWidth
                    onChange={this.handleNumbOfIndivPlayers}
                    id="outlined-number"
                    label="Nombre de joueurs maximum"
                    type="number"
                    value="1"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                {/* </div> */}



        
                <Grid item xs={6} className={
              this.state.isSwitchOn ? "toggleDisplayOn" : "toggleFilterOff"
            }>
                  <TextField
                    onChange={this.handleNumPlayerByTeam}
                    fullWidth
                    id="outlined-number"
                    label="Nombre de joueurs / équipe"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                {/* </div> */}

                <Grid item xs={6}>
                  <SearchPlace clbk={this.handlePlace} fullWidth />
                </Grid>

                <Grid item xs={6}>
                  <OneDatePicker
                    setDate={this.handleDate}
                    setHour={this.handleHour}
                  />
                </Grid>

                <Grid item xs={12}>
                  <div className="img-container">
                    <MyMapTwo truc={this.state.hour}/>
                  </div>
                </Grid>
              </Grid>
              <div className="submit-btn padding-btn">
                <SubmitBtn />
              </div>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default BasicTextFields;
