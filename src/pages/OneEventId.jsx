import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "../components/buttons/Search";
import TeamSelector from "../components/buttons/TeamSelector";
import OneDatePicker from "../components/buttons/OneDatePicker";
import Level from "../components/buttons/Level";
import UploadBtn from "../components/buttons/UploadBtn";
import axios from "axios";

import SearchPlace from "../components/Forms/SearchPlace";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";

import SubmitBtn from "../components/buttons/SubmitBtn";

import MyMap from "../components/buttons/MyMap"

import AddBtn from "../components/buttons/AddBtn";
import RetirerBtn from "../components/buttons/RetirerBtn";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

export default class OneEventId extends Component {

  state={
event:null,
creator:null,
creatorInfo:null,
image:'',
titre: '',
date :'',
heure: '',
sport: '',
type: '',
level: '',
description: '',
createur: '',
avatarCreateur: '',
adresse : '',
coordoninates: '',
participants: '',
teamA: '',
teamB: '',
  }


componentDidMount(){
 const id = this.props.match.params.id;
//  const creatorId = this.state.event
 return service
 .get(`/api/events/${id}`)
 .then((apiRes)=>{
   this.setState({
     event : apiRes.data,
     image : apiRes.data.image,
     titre: apiRes.data.title,
date :apiRes.data.date,
heure: apiRes.data.date,
sport: apiRes.data.sportType.sport,
type: apiRes.data.type,
level: apiRes.data.level,
description: apiRes.data,
createur: apiRes.data,
avatarCreateur: apiRes.data,
adresse : apiRes.data,
coordoninates: apiRes.data,
participants: apiRes.data,
teamA: apiRes.data,
teamB: apiRes.data,
    
    
    })
   console.log(apiRes.data)
 })
 .catch((err)=>
 console.log(err))
}

// componentDidUpdate(){

 
//   return service
//   .get(`/api/${creatorId}`)
//   .then((apiRes)=>{
//     this.setState({event : apiRes.data})
//   })
//   .catch((err)=>
//   console.log(err))

// }



render(){
  console.log("ici", this.state)

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
              <h2>Lundi 17 Septembre</h2>
            </div>
            <div>
              <h2>10:58</h2>
            </div>
          </div>

          <h1 className="title">Titre de l'évenement</h1>

          <div className="tag-container margin-right ">
            <h3>Nom du sport</h3>
          </div>
          <div className="tag-container margin-right ">
            <h3>En équipe</h3>
          </div>
          <div className="tag-container margin-right ">
            <h3>Débutant</h3>
          </div>

          <p className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            massa et nibh facilisis cursus vitae non nunc. Suspendisse mattis
            fringilla arcu consequat ullamcorper. Morbi at tincidunt est.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>

          <h2>Createur</h2>

          <div className="flex-between">
            <div className="flex-between">
              <div className="pic-avatar-container margin-title-creator "></div>
              <h3 className="title  ">Nom Prénom créateur</h3>
            </div>
          </div>

          <h2>Adresse de RDV</h2>
          <div>
            <div className="adresse-container">
              <div>
                <p>17 rue du Moulin 75018 Paris</p>
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
          <AddBtn/>
          </div>
        </Grid>

        <Grid item xs={12}>
           <div className="padding-btn">
          <RetirerBtn/>
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
