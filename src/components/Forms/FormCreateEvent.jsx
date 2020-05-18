import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Search from "../buttons/Search"
import TeamSelector from "../buttons/TeamSelector";
import OneDatePicker from "../buttons/OneDatePicker";
import Level from "../buttons/Level";
import UploadBtn from "../buttons/UploadBtn";

import SearchPlace from './SearchPlace'


  
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <Search />

      <UploadBtn />
      <TextField id="outlined-basic" label="Intitulé" variant="outlined" />
     
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />

        <SearchPlace />

       <TeamSelector /> 

       <OneDatePicker />
       
        <TextField
          className="zIndex"
          id="outlined-number"
          label="Nombre de joueurs maximum"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

          <TextField
          id="outlined-number"
          label="Nombre de joueurs / équipe"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

      <Level />
         
     
    </form>
  );
}