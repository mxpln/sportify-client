import React, { Component } from "react";
import Search from "../components/buttons/Search";
import DatePicker from "../components/buttons/DatePicker";
import Level from "../components/buttons/Level";
import TeamSelector from "../components/buttons/TeamSelector";
import FavoriteSportsFilter from "../components/buttons/FavoriteSportsFilter";
import TextField from "@material-ui/core/TextField";
import MyMap from "../components/buttons/MyMap";
import Card from "../components/buttons/Card";
import { NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import SubmitBtn from "../components/buttons/SubmitBtn";

import RechercheBtn from "../components/buttons/RechercheBtn";
import ChangerViewBtn from "../components/buttons/ChangerViewBtn";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ViewsChangerBtn from "../components/buttons/ViewsChangerBtn";
import FilterIconBtn from "../components/buttons/FilterIconBtn";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));
class Home extends Component {
  state = {
    isSwitchOn: false,
    isFilterOn: false,
    search: "",
    startDate: "",
    endDate: "",
    level: "",
    team: "",
    favoriteSports: false,
  };
  toggle = () => {
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    });
  };
  toggleFilter = () => {
    this.setState({
      isFilterOn: !this.state.isFilterOn,
    });
  };
  handleChange = (event, value) => {
    let res;
    if (value === null) res = "";
    else {
      res = value.sport;
    }
    this.setState({
      search: res,
    });
  };
  handleEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  };
  handleStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleRating = (newValue) => {
    let res;
    if (newValue === null || newValue === 1) {
      res = "facile";
    } else if (newValue === 2) {
      res = "modéré";
    } else if (newValue === 3) {
      res = "confirmé";
    }
    this.setState({
      level: res,
    });
  };
  handleTeam = (newValue) => {
    this.setState({
      team: newValue,
    });
  };
  handleFavorite = (value) => {
    this.setState({
      favoriteSports: value,
    });
  };
  render() {
    // console.log(this.state.isFilterOn);
    return (
      // VUE FILTER
     
      <>
        <React.Fragment>
          <CssBaseline />
          <div className="color margin-top">
            <Container maxWidth="lg">
              <Grid className="test-search" container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  {/* <div className="margin-top"> */}
                    <Search clbk={this.handleChange} />
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    endDate={this.handleEndDate}
                    startDate={this.handleStartDate}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={2}>
                  <RechercheBtn />
                </Grid>
                <Grid item xs={6} sm={2} md={1}>
                  <FilterIconBtn clbk={this.toggleFilter} />
                  {/* <button className ="largeurTotale" onClick={this.toggleFilter}>Filter</button> */}
                </Grid>

                <Grid item xs={6} sm={2} md={1}>
                  <ViewsChangerBtn clbk={this.toggle} />
                  {/* <button className ="largeurTotale" onClick={this.toggle}>Changer vue</button> */}
                </Grid>
              </Grid>
            </Container>
          </div>
        </React.Fragment>

        
        <div
          className={
            this.state.isFilterOn ? "toggleFilterOn" : "toggleFilterOff"
          }
        >
          <React.Fragment>
            <CssBaseline />
            <div className="position-filtered-container">
              <Container maxWidth="md">
                <Grid  container spacing={2}>
                  <Grid className="position-filtered" item xs={12} sm={12} md={12}>
                    <Level ratingValue={this.handleRating} />
                    <TeamSelector parentCallback={this.handleTeam} />
                    
                    <FavoriteSportsFilter
                      parentCallback={this.handleFavorite}
                    />
                  </Grid>
                 

          
                </Grid>
              </Container>
            </div>
          </React.Fragment>
        </div>
        
        {/* // VUE CHANGER VIEW */}
        <>
      
          {/* <div className="change-view-container">
          <button onClick={this.toggle}>Changer vue</button>
        </div> */}
          <div
            className={
              this.state.isSwitchOn ? "toggleDisplayOff" : "toggleDisplayOn"
            }
          >
            <MyMap />
          </div>
          <div
            className={
              this.state.isSwitchOn ? "toggleDisplayOn" : "toggleDisplayOff"
            }
          >
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="md">
                <h2 className="title">Lundi 17 Mai 2020</h2>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                </Grid>
              </Container>
            </React.Fragment>
          </div>
        </>
      </>
    );
  }
}
export default Home;
