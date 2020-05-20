import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "../components/buttons/Search";
import TeamSelector from "../components/buttons/TeamSelector";
import OneDatePicker from "../components/buttons/OneDatePicker";
import Level from "../components/buttons/Level";
import UploadBtn from "../components/buttons/UploadBtn";
import axios from "axios";
import apiHandler from "../api/apiHandler";
import SearchPlace from "../components/Forms/SearchPlace";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";

import SubmitBtn from "../components/buttons/SubmitBtn";

import MyMap from "../components/buttons/MyMap";

import AddBtn from "../components/buttons/AddBtn";
import RetirerBtn from "../components/buttons/RetirerBtn";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

export default class OneEventId extends Component {
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
    avatarCreateur: "",
    adresse: "",
    coordoninates: "",
    participants: "",
    teamA: "",
    teamB: "",
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
          date: apiRes.data.date,
          heure: apiRes.data.date,
          sport: apiRes.data.sportType.sport,
          type: apiRes.data.type,
          level: apiRes.data.level,
          description: apiRes.data.description,
          createurFirstName: apiRes.data.creator.firstName,
          createurLastName: apiRes.data.creator.lastName,
          avatarCreateur: apiRes.data.creator.image,
          adresse: apiRes.data.location.formattedAddress,
          coordoninates: apiRes.data.location.coordinates,
          participants: apiRes.data.individualNbrOfParticipants,
          teamA: apiRes.data.teamA,
          teamB: apiRes.data.teamB,
        });
        console.log(apiRes.data);
      })
      .catch((err) => console.log(err));
  }

  handleAdd = (event) => {
    const id = this.props.match.params.id;
    event.preventDefault();
    if (this.state.type === "collective") {
      apiHandler
        .post(`/api/events/multi/${id}/join`)
        .then((res) => {
          console.log(res);
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiHandler
        .post(`/api/events/solo/${id}/join`)
        .then((res) => {
          console.log(res);
          this.props.history.push("/");
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
          console.log(res);
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiHandler
        .post(`/api/events/solo/${id}/leave`)
        .then((res) => {
          console.log(res);
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // componentDidUpdate(){

  //   return service
  //   .get(`/api/${creatorId}`)
  //   .then((apiRes)=>{
  //     this.setState({event : apiRes.data})
  //   })
  //   .catch((err)=>
  //   console.log(err))

  // }

  render() {
    console.log("ICIII", this.state);

    if (this.state.level === "beginner") {
      this.setState({ level: "Débutant" });
    }
    if (this.state.level === "intermediate") {
      this.setState({ level: "Intermédiaire" });
    }
    if (this.state.level === "advanced") {
      this.setState({ level: "Avancé" });
    }

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
                <h2>{this.state.date}</h2>
              </div>
              <div>
                <h2>{this.state.heure}</h2>
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
                <div className="pic-avatar-container margin-title-creator "></div>
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

              <div className="img-container"> </div>
            </div>

            <h2 className="title">Participants</h2>

            {/* INDIVIDUEL*/}

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className="team-container">
                  <div className="flex-between">
                    <div className="flex-between">
                      <div className="pic-avatar-container"></div>
                      <h3 className="title">Nom Prénom participant</h3>
                    </div>
                  </div>
                  <div className="flex-between">
                    <div className="flex-between">
                      <div className="pic-avatar-container"></div>
                      <h3 className="title">Nom Prénom participant</h3>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>

            {/* SI TEAM */}

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <div className="team-container">
                  <h3 className="title">Team 1</h3>
                  <div className="flex-between">
                    <div className="flex-between">
                      <div className="pic-avatar-container"></div>
                      <h3 className="title">Nom Prénom participant</h3>
                    </div>
                  </div>
                  <div className="flex-between">
                    <div className="flex-between">
                      <div className="pic-avatar-container"></div>
                      <h3 className="title">Nom Prénom participant</h3>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="team-container">
                  <h3 className="title">Team 2</h3>
                  <div className="flex-between">
                    <div className="flex-between">
                      <div className="pic-avatar-container"></div>
                      <h3 className="title">Nom Prénom participant</h3>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>

            <h2 className="title">Messagerie</h2>
            <div>
              <div className="img-container"></div>
            </div>

            <Grid item xs={12}>
              <div className="padding-btn">
                <AddBtn clbk={this.handleAdd} />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="padding-btn">
                <RetirerBtn clbk={this.handleRemove} />
              </div>
            </Grid>

            {/* <div className="submit-btn padding-btn">
            <SubmitBtn />
          </div> */}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
