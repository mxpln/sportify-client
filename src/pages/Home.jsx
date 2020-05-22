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
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import AddBtn from "../components/buttons/AddBtn";
import Avatar from "@material-ui/core/Avatar";
import RetirerBtn from "../components/buttons/RetirerBtn";
import Modal from "@material-ui/core/Modal";
import { red } from "@material-ui/core/colors";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";
import ViewEventBtn from "../components/buttons/ViewEventBtn"

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
import ModalMap from "../components/buttons/ModalMap";

import ViewsChangerBtn from "../components/buttons/ViewsChangerBtn";
import FilterIconBtn from "../components/buttons/FilterIconBtn";
import apiHandler from "../api/apiHandler";
require("dotenv").config();
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2FwemViaWIiLCJhIjoiY2s5emRveWVxMHlkdDNndGVpcjM5ZDNuNSJ9.RHGZkM4ZydezmApMPNj3yA",
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // width: 275,
//     maxWidth: 345,
//     // margin:"10px"
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
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
    soloSports: [],
    teamSports: [],
    items: [],
    lng: 2.333333,
    lat: 48.866667,
    zoom: 11,
    style: "mapbox://styles/mapbox/light-v9",
    userLocation: [],
    setOpen: false,
    imageSolo: "",
    imageTeam: "",
    imageClicked: null,

    teamCreatorPic: [],
    teamTitleEvent: [],
    teamDate: [],
    teamEventPic: [],
    teamA: [],
    teamB: [],
    allTeamsPics: [],
    teamSportName: [],

    soloCreatorPic: [],
    soloTitleEvent: [],
    soloDate: [],
    soloEventPic: [],
    soloParticipantsPics: [],
    soloSportName: [],
  };

  handleClickMarkerSolo = (id, coords) => {
    this.setState({
      imageClicked: id,
      lng: coords[0],
      lat: coords[1],
    });
  };
  handleHidePopup = (event) => {
    event.stopPropagation();
    this.setState({
      imageClicked: null,
    });
    console.log("CLICK");
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

  handleOpen = () => {
    this.setState({
      setOpen: true,
    });
  };
  handleClose = () => {
    this.setState({
      setOpen: false,
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

  componentDidMount = () => {
    apiHandler
      .getSoloSport()
      .then((res) => {
        this.setState({
          soloSports: res,
          imageSolo: res.image,
        });
      })
      .catch((apiError) => {
        console.log(apiError);
      });

    apiHandler
      .getTeamSport()
      .then((apiRes) => {
        let test;
        let allTeams;
        this.setState({
          allTeamsPics: allTeams,
        });
        // console.log("apiRes", apiRes)
        this.setState({
          teamSports: apiRes,
          imageTeam: apiRes.image,
          teamCreatorPic: apiRes.map((i) => {
            return i.creator.image;
          }),
          teamTitleEvent: apiRes.map((item) => {
            return item.title;
          }),
          teamDate: apiRes.map((item) => {
            return item.date;
          }),
          teamA: apiRes.map((item) => {
            return item.teamA;
          }),
          teamB: apiRes.map((item) => {
            return item.teamB;
          }),
          teamSportName: apiRes.map((item) => {
            return item.sportType.sport;
          }),
          allTeams: apiRes
            .map((item) => {
              return item.teamA;
            })
            .concat(
              apiRes.map((item) => {
                return item.teamB;
              })
            ),
        }).map((item) => {
          return item.image;
        });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  render() {
    let allSoloSports = this.state.soloSports;
    let allTeamSports=this.state.teamSports;
    let searchTeamSports=this.state.search;
    const allSports = allTeamSports.concat(allSoloSports)


   
   console.log(allSports)

  
  // console.log("--->", searchResult)
  
  

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });

    const { center, zoom, style } = this.state;

    return (
      // VUE FILTER

      <>
        <React.Fragment>
          <CssBaseline />
          <div className="color margin-top">
            <Container maxWidth="md">
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
                <Grid container spacing={2}>
                  <Grid
                    className="position-filtered"
                    item
                    xs={12}
                    sm={12}
                    md={12}
                  >
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
            <Map
              center={[this.state.lng, this.state.lat]}
              zoom={[zoom]}
              style={style}
              containerStyle={{
                height: "100vh",
                width: "100vw",
              }}
                movingMethod="flyTo"
            >
              {this.state.soloSports.map((item, index) => (

               
                <Marker
                  onClick={() =>
                    this.handleClickMarkerSolo(
                      item._id,
                      item.location.coordinates
                    )
                  }
                  key={index}
                  coordinates={item.location.coordinates}
                  anchor="bottom"
                >
                  {/* // SI L'IMAGE EST CLIQUEE */}

                  {this.state.imageClicked === item._id ? (
                   
                    <div className="zIndexCard card-mini-container">
                      <Card key={index} className="zIndexCard">
                        <CardHeader
                          avatar={<Avatar aria-label="recipe">R</Avatar>}
                          title={item.title}
                          subheader={item.date.slice(11, 16)}
                        />
                        <NavLink
                          exact
                          to={`/OneEvent/${item._id}`}
                        >
                          <CardMedia
                            // className={classes.media}

                            className="card-image"
                            image={item.image}
                            title="event"
                          />
                        </NavLink>
                        <div className="card-container-bottom">
                          <div className="avatar-group">
                           
                          </div>

                          <div className="avatar-group-btn">

                          <NavLink
                          // place={this.state}
                          exact
                          to={`/OneEvent/${item._id}`}
                        >
                          <ViewEventBtn />
                          
                          </NavLink>
                          </div>

                          <div>
                            {/* <RetirerBtn /> */}
                          </div>
                        </div>
                      </Card>

                      <div
                        onClick={this.handleHidePopup}
                        className="zIndexTest"
                      >
                        X
                      </div>
                    </div>
                  ) : (
                    // SI L IMAGE EST PAS CLIQUEE
                    <img  className="event-icon zIndexImage" src={item.image} />
                  )}
                </Marker>
              ))}

              {this.state.teamSports.map((item, index) => (
                <Marker
                  onClick={() =>
                    this.handleClickMarkerSolo(
                      item._id,
                      item.location.coordinates
                    )
                  }
                  key={index}
                  coordinates={item.location.coordinates}
                  anchor="bottom"
                >
                  {/* // SI L'IMAGE EST CLIQUEE */}

                  {this.state.imageClicked === item._id ? (
                    <div className="zIndexCard card-mini-container">
                      <Card  key={index}>
                        <CardHeader
                          avatar={<Avatar aria-label="recipe">R</Avatar>}
                          title={item.title}
                          subheader={item.date.slice(11, 16)}
                        />
                        <NavLink
                          place={this.state}
                          exact
                          to={`/OneEvent/${item._id}`}
                        >
                          <CardMedia
                            // className={classes.media}

                            className="card-image"
                            image={item.image}
                            title="Event"
                          />
                        </NavLink>
                        <div className="card-container-bottom">
                          <div className="avatar-group">
                           
                          </div>

                          <div className="avatar-group-btn">
                            {/* <AddBtn /> */}
                          </div>

                          <div className="avatar-group-btn">
                          <NavLink
                          // place={this.state}
                          exact
                          to={`/OneEvent/${item._id}`}
                        >
                          <ViewEventBtn />
                          </NavLink>
                        
                            
                          </div>
                          
                        </div>
                      </Card>

                      <div
                        onClick={this.handleHidePopup}
                        className="zIndexTest"
                      >
                        X
                      </div>
                    </div>
                  ) : (
                    // SI L IMAGE EST PAS CLIQUEE
                    <img className="event-icon zIndexImage" src={item.image} />
                  )}
                </Marker>
              ))}



            </Map>
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
                  {/* ///MAP SUR LES EVENT INDIVIDUELS */}
                  {this.state.soloSports.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <Card key={index}>
                        <CardHeader
                          avatar={<Avatar aria-label="recipe"><img src={item.creator.image}/></Avatar>}
                          title={item.title}
                          subheader={
                            <Moment format="DD MMM YYYY - HH:mm">
                              {item.date}
                            </Moment>
                          }
                        />
                        <NavLink
                          place={this.state}
                          exact
                          to={`/OneEvent/${item._id}`}
                        >
                          <CardMedia
                            // className={classes.media}

                            className="card-image"
                            image={item.image}
                            title="Event"
                          />
                        </NavLink>
                        <div className="card-container-bottom">
                          <div className="avatar-group">
                     
                          </div>
                        
                          <div className="avatar-group-btn">
                          <NavLink
                          // place={this.state}
                          exact
                          to={`/OneEvent/${item._id}`}
                        >
                          <ViewEventBtn />
                        
                            </NavLink>
                          </div>

                         
                        </div>
                      </Card>
                    </Grid>
                  ))}

                  {/* //MAP SUR LES EVENT EN EQUIPE           */}

                  {this.state.teamSports.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <Card key={index}>
                        <CardHeader
                          avatar={<Avatar aria-label="recipe">R</Avatar>}
                          title={item.title}
                          subheader={
                            <Moment format="DD MMM YYYY - HH:mm">
                              {item.date}
                            </Moment>
                          }
                        />
                        <NavLink exact to={`/OneEvent/${item._id}`}>
                          <CardMedia
                            // className={classes.media}
                            className="card-image"
                            image={item.image}
                            title="Event"
                          />
                        </NavLink>
                        <div className="card-container-bottom">
                          <div className="avatar-group">
                         
                          </div>

                          <div className="avatar-group-btn">
                            {/* <AddBtn /> */}
                            <NavLink exact to={`/OneEvent/${item._id}`}>
                            <ViewEventBtn />
                            </NavLink>
                         
                            {/* <RetirerBtn /> */}
                          </div>
                        </div>
                      </Card>
                    </Grid>
                  ))}
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
