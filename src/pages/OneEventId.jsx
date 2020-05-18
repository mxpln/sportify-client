import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "../components/buttons/Search";
import TeamSelector from "../components/buttons/TeamSelector";
import OneDatePicker from "../components/buttons/OneDatePicker";
import Level from "../components/buttons/Level";
import UploadBtn from "../components/buttons/UploadBtn";

import SearchPlace from "../components/Forms/SearchPlace";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";

import SubmitBtn from "../components/buttons/SubmitBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function OneEventId() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="main-container">
          <h2 className="title-container"></h2>
          <div className="img-position">
            <div className="img-container"></div>
          </div>

          <div className="flex-between margin-top">
            <div className="flex-between">
              <div className="pic-avatar-container"></div>
              <h3 className="title">Createur</h3>
            </div>
          </div>

          {/* <div>
              <h3 className="title">Date / Heure</h3>
            </div> */}

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

          <h2>Adresse</h2>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div>Adresse</div>
            </Grid>

            <Grid item xs={3}>
              <div>Date</div>
            </Grid>

            <Grid item xs={3}>
              <div>Heure</div>
            </Grid>

            <Grid item xs={12}>
              <div className="img-container"></div>
            </Grid>
          </Grid>

          <h2 className="title">Participants</h2>

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

          <div className="submit-btn padding-btn">
            <SubmitBtn />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
