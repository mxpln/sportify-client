import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "../buttons/Search";
import TeamSelector from "../buttons/TeamSelector";
import OneDatePicker from "../buttons/OneDatePicker";
import Level from "../buttons/Level";
import UploadBtn from "../buttons/UploadBtn";

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

export default function BasicTextFields() {
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
          <h2 className="title-container">Créer un événement sportif</h2>
          <div className="img-position">
            <div className="img-container"></div>
          </div>

          <div className="submit-btn padding-btn">
            <UploadBtn />
          </div>

          <form noValidate autoComplete="off">
            <Grid container spacing={3}>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Intitulé"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
              <Search />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                />
              </Grid>

              <Grid item xs={3}>
              <TeamSelector fullWidth/>
              </Grid> 
              
              <Grid item xs={3}>
                <Level />
              </Grid>
              
              <Grid item xs={3}>
              <TextField
              fullWidth
                id="outlined-number"
                label="Nombre de joueurs maximum"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              </Grid>

              <Grid item xs={3}>
              <TextField
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

              

              

              <Grid item xs={6}>
          
              <SearchPlace fullWidth/>
              </Grid>
              
              <Grid item xs={6}>
                <OneDatePicker />
              </Grid>

              <Grid item xs={12}>
          
              <div className="img-container"></div>
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
