import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const FormControlLabelPosition = ({parentCallback}) => {

const [selectedSwitch, setSwitch] = React.useState("Individuel");

const labelHandler = () => {
  if (selectedSwitch==="Individuel"){
    const newValue = "En équipe";
    setSwitch(newValue);
    parentCallback(newValue);}
  else {const newValue = "Individuel";
    setSwitch(newValue);
    parentCallback(newValue);}
}



  return (
    
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label={selectedSwitch}
          labelPlacement="top"
        onChange= {labelHandler}
        />
        
      </FormGroup>
    </FormControl>
  );
}

export default FormControlLabelPosition;