import React, { Component } from "react";

import axios from "axios";
import apiHandler from "../api/apiHandler";
import Chat from "../components/buttons/Chat";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";

import TestChat from "../components/buttons/TestChat";

import UserContext from "../components/Auth/UserContext";
import AddBtn from "../components/buttons/AddBtn";
import RetirerBtn from "../components/buttons/RetirerBtn";
require("dotenv").config();
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2FwemViaWIiLCJhIjoiY2s5emRveWVxMHlkdDNndGVpcjM5ZDNuNSJ9.RHGZkM4ZydezmApMPNj3yA",
});

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

export default class OneEventId extends Component {
  static contextType = UserContext;
  state = {
    event: null,
    creator: null,
    creatorInfo: null,
    image: "",
    titre: "",
    date: "",
    heure: "",
    sport: "",
    type: "",
    level: "",
    description: "",
    createurFirstName: "",
    createurLastName: "",
    createurImage: "",
    avatarCreateur: "",
    adresse: "",
    coordoninates: "",
    participants: [],
    teamA: [],
    teamB: [],
    items: [],
    coordinates: [2.61570809, 47],
    zoom: 13,
    style: "mapbox://styles/mapbox/light-v9",
    userLocation: [],
    eventCoordinates: [],
    teamAFirstName: ["Pas encore de participant"],
    teamALastName: [""],
    teamBFirstName: [],
    teamBLastName: [],
    teamAImage: [],
    teamBImage: [],
    teamAName: [],
    teamBName: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    //  const creatorId = this.state.event
    return service
      .get(`/api/events/${id}`)
      .then((apiRes) => {
        this.setState({
          event: apiRes.data,
          image: apiRes.data.image,
          titre: apiRes.data.title,
          date: apiRes.data.date.slice(0, 10),
          heure: apiRes.data.date,
          sport: apiRes.data.sportType.sport,
          type: apiRes.data.type,
          level: apiRes.data.level,
          description: apiRes.data.description,
          createurFirstName: apiRes.data.creator.firstName,
          createurLastName: apiRes.data.creator.lastName,
          createurImage: apiRes.data.creator.image,
          avatarCreateur: apiRes.data.creator.image,
          adresse: apiRes.data.location.formattedAddress,
          coordinates: apiRes.data.location.coordinates,
          participants: apiRes.data.individualNbrOfParticipants,
          teamAFirstName: apiRes.data.teamA.map((item) => {
            return item.firstName;
          }),
          teamALastName: apiRes.data.teamA.map((item) => {
            return item.lastName;
          }),
          teamAImage: apiRes.data.teamA.map((item) => {
            return item.image;
          }),

          teamBFirstName: apiRes.data.teamB.map((item) => {
            return item.firstName;
          }),
          teamBLastName: apiRes.data.teamB.map((item) => {
            return item.lastName;
          }),
          teamBImage: apiRes.data.teamB.map((item) => {
            return item.image;
          }),
          teamAName: apiRes.data.teamA.map((item) => {
            return item.lastName + " " + item.firstName;
          }),
          teamBName: apiRes.data.teamB.map((item) => {
            return item.lastName + " " + item.firstName;
          }),
          _id: apiRes.data._id,
        });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    if (this.state.coordinates !== this.state.coordinates) {
      this.setState({
        coordinates: this.state.coordinates,
        zoom: 11,
      });
    }
  }

  handleAdd = (event) => {
    const id = this.props.match.params.id;
    event.preventDefault();
    if (this.state.type === "collective") {
      apiHandler
        .post(`/api/events/multi/${id}/join`)
        .then((res) => {
          let updatedUser = res.data.dbRes;
          this.context.setUser(updatedUser);
          let updatedEvent = res.data.eventsDocument;
          this.setState({
            teamAFirstName: updatedEvent.teamA.map((item) => {
              return item.firstName;
            }),
            teamALastName: updatedEvent.teamA.map((item) => {
              return item.lastName;
            }),
            teamAImage: updatedEvent.teamA.map((item) => {
              return item.image;
            }),

            teamBFirstName: updatedEvent.teamB.map((item) => {
              return item.firstName;
            }),
            teamBLastName: updatedEvent.teamB.map((item) => {
              return item.lastName;
            }),
            teamBImage: updatedEvent.teamB.map((item) => {
              return item.image;
            }),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiHandler
        .post(`/api/events/solo/${id}/join`)
        .then((res) => {
          let updatedUser = res.data.userDocument;
          this.context.setUser(updatedUser);
          let updatedEvent = res.data.eventsDocument;
          console.log("==========", updatedEvent.individualNbrOfParticipants);
          this.setState({
            participants: updatedEvent.individualNbrOfParticipants,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  handleRemove = (event) => {
    const id = this.props.match.params.id;
    event.preventDefault();
    if (this.state.type === "collective") {
      apiHandler
        .post(`/api/events/multi/${id}/leave`)
        .then((res) => {
          console.log("RES", res);
          let updatedUser = res.data.updatedUser;
          this.context.setUser(updatedUser);
          let updatedEvent = res.data.eventsDocument;

          this.setState({
            teamAFirstName: updatedEvent.teamA.map((item) => {
              return item.firstName;
            }),
            teamALastName: updatedEvent.teamA.map((item) => {
              return item.lastName;
            }),
            teamAImage: updatedEvent.teamA.map((item) => {
              return item.image;
            }),

            teamBFirstName: updatedEvent.teamB.map((item) => {
              return item.firstName;
            }),
            teamBLastName: updatedEvent.teamB.map((item) => {
              return item.lastName;
            }),
            teamBImage: updatedEvent.teamB.map((item) => {
              return item.image;
            }),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiHandler
        .post(`/api/events/solo/${id}/leave`)
        .then((res) => {
          let updatedUser = res.data.userDocument;
          this.context.setUser(updatedUser);
          let updatedEvent = res.data.eventsDocument;
          this.setState({
            participants: updatedEvent.individualNbrOfParticipants,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    // console.log("USER ID", this.context._id)

    if (this.state.level === "beginner") {
      this.setState({ level: "Débutant" });
    }
    if (this.state.level === "intermediate") {
      this.setState({ level: "Intermédiaire" });
    }
    if (this.state.level === "advanced") {
      this.setState({ level: "Avancé" });
    }

    const isThereATeamB = this.state.teamBFirstName;
    let displayOne;
    let displayTwo;
    let displayImage;
    if (this.state.teamBFirstName == 0 && this.state.teamBLastName == 0) {
      displayOne = <h3 className="title">Pas encore de participants...</h3>;
      displayImage = (
        <img
          src="/media/standard_profile.png"
          className="pic-avatar-container"
        />
      );
    } else {
      displayImage = this.state.teamBImage.map((item, index) => (
        <div className="container-image">
          <img key={index} className="pic-avatar-container" src={item} />
        </div>
      ));
      displayOne = this.state.teamBFirstName.map((item, index) => (
        <h3 key={index} className="title space">
          {item}
        </h3>
      ));
      displayTwo = this.state.teamBLastName.map((item, index) => (
        <h3 key={index} className="title">
          {" "}
          {item}
        </h3>
      ));
    }

    // <div className="pic-avatar-container"></div>

    const { style } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <div className="main-container">
            <h2 className="title-container"></h2>
            <div className="img-position">
              <img className="img-container" src={this.state.image} />
            </div>

            <div className="flex-between date-hour-container">
              <div>
                {" "}
                <h2>
                  <Moment format="dddd DD MMMM YYYY">{this.state.date}</Moment>
                </h2>
              </div>
              <div>
                <h2>
                  <Moment format="HH:mm">{this.state.heure}</Moment>
                </h2>
              </div>
            </div>

            <h1 className="title">{this.state.titre}</h1>

            <div className="tag-container margin-right ">
              <h3>{this.state.sport}</h3>
            </div>

            <div className="tag-container margin-right ">
              <h3>
                {this.state.type === "individual" ? "Individuel" : "En équipe"}
              </h3>
              {/* <h3>En équipe</h3> */}
            </div>
            <div className="tag-container margin-right ">
              <h3>{this.state.level}</h3>
            </div>

            <p className="title">{this.state.description}</p>

            <h2>Créateur</h2>

            <div className="flex-between">
              <div className="flex-between">
                <img
                  src={this.state.createurImage}
                  className="pic-avatar-container margin-title-creator "
                />

                <h3 className="title  ">
                  {this.state.createurFirstName} {this.state.createurLastName}
                </h3>
              </div>
            </div>

            <h2>Adresse de RDV</h2>
            <div>
              <div className="adresse-container">
                <div>
                  <p>{this.state.adresse}</p>
                </div>
              </div>
              <div className="img-container-map">
                <Map
                  center={this.state.coordinates}
                  zoom={[this.state.zoom]}
                  style={style}
                  containerStyle={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "4px 20px 4px 20px",
                  }}
                  movingMethod="flyTo"
                >
                  {!this.state.coordinates ? (
                    <div></div>
                  ) : (
                    <Marker
                      coordinates={this.state.coordinates}
                      anchor="bottom"
                    >
                      <img className="location-icon" src="/media/marker.svg" />
                    </Marker>
                  )}
                </Map>
              </div>
            </div>

            <h2 className="title">Participants</h2>

            {this.state.type === "individual" ? (
              <div className="team-container">
                <Grid container spacing={3}>
                  <div className="flex-between">
                      {this.state.participants.map((item, index) => (
                    <Grid item xs={12}>
                        <div className="title position-player-participants">
                          <img
                            className="pic-avatar-container"
                            key={index}
                            src={item.image}
                          />
                          {/* <h3 className="title" key={index}>
                            {item.firstName} {item.lastName}
                          </h3> */}
                        </div>
                    </Grid>
                      ))}
                  </div>
                </Grid>
              </div>
            ) : (
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <div className="team-container">
                    <h3 className="title">Team 1</h3>

                    <div className="flex-between">
                      <div className="flex-between">
                        {this.state.teamAImage.map((item, index) => (
                          <img
                            key={index}
                            className="pic-avatar-container"
                            src={item}
                          />
                        ))}
{/* 
                        {this.state.teamAFirstName.map((item, index) => (
                          <h3 key={index} className="title space">
                            {item}
                          </h3>
                        ))}
                        {this.state.teamALastName.map((item, index) => (
                          <h3 key={index} className="title">
                            {" "}
                            {item}
                          </h3>
                        ))} */}
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <div className="team-container">
                    <h3 className="title">Team 2</h3>
                    <div className="flex-between">
                      <div className="flex-between">
                        {displayImage}

                        {/* {displayOne}
                        {displayTwo} */}
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            )}

            <h2 className="title">Messagerie</h2>

            <div className="chat-container">
              <TestChat />
            </div>

            <div>
              {this.context.user &&
                ("THE USER CONTEXT", console.log(this.context.user.events))}
              {this.state.event &&
                ("THE EVENT ID", console.log(this.state.event._id))}
              {this.state.event &&
              this.context.user &&
              this.context.user.events.includes(this.state.event._id) ? (
                <Grid item xs={12}>
                  <div className="padding-btn">
                    <RetirerBtn clbk={this.handleRemove} />
                  </div>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <div className="padding-btn">
                    <AddBtn clbk={this.handleAdd} />
                  </div>
                </Grid>
              )}
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
