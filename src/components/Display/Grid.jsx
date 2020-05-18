import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TextField from "@material-ui/core/TextField";
import Password from "../buttons/Password";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
          <Password fullWidth/>
          <TextField fullWidth id="email" name="email" label="Email" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
         
          <Password fullWidth/>
          <TextField
          fullWidth
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        </Grid>

        <Grid item xs={6}>
        <TextField fullWidth id="email" name="email" label="Email" variant="outlined" />

        </Grid>

        <Grid item xs={6}>
        <TextField fullWidth id="email" name="email" label="Email" variant="outlined" />
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}